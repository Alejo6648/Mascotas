const jwt = require('jsonwebtoken');
const UserModel = require('../models/UserModel');

exports.refreshToken = async (req, res) => {
  const { refreshToken } = req.body;

  try {
    const decoded = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET);
    const user = await UserModel.getUserById(decoded.userId);

    if (!user) {
      return res.status(401).json({ message: 'Token de refresco inválido o expirado' });
    }

    const accessToken = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: '15m' });

    res.json({ accessToken });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al refrescar el token' });
  }
};
