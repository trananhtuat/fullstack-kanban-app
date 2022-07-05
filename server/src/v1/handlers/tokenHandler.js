const jsonwebtoken = require('jsonwebtoken')
const User = require('../models/user')

const tokenDecode = (req) => {
  const bearerHeader = req.headers['authorization']
  if (bearerHeader) {
    const bearer = bearerHeader.split(' ')[1]
    try {
      const tokenDecoded = jsonwebtoken.verify(
        bearer,
        process.env.TOKEN_SECRET_KEY
      )
      return tokenDecoded
    } catch {
      return false
    }
  } else {
    return false
  }
}

exports.verifyToken = async (req, res, next) => {
  const tokenDecoded = tokenDecode(req)
  if (tokenDecoded) {
    const user = await User.findById(tokenDecoded.id)
    if (!user) return res.status(401).json('Unathorized')
    req.user = user
    next()
  } else {
    res.status(401).json('Unathorized')
  }
}