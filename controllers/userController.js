const UserController = function () { };

UserController.show = async (req, res) => {
  try {
    return res.status(200).send({ success: 'OK!' });
  } catch (err) {
    return res.status(500).send({ error: 'Erro ao buscar os usuários!' });
  }
}

module.exports = UserController;
