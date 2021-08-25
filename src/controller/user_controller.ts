import { Request, Response } from 'express'
import { User } from '../DataBase/Model/user_model'

export default class UserController {
  async create (req: Request, res: Response) {
    const newUser = new User(req.body)
    const exist = await User.findOne({ email: newUser.email })
    if (exist == null) {
      newUser.save(req.body, function (err, user) {
        console.log(err)
        if (err) return res.status(500).send('Problem trying save the user')
        res.status(201).send(user)
      })
    } else {
      res.send(500).send('Usuário já existe')
    }
  }

  update (req: Request, res: Response) {
    User.findByIdAndUpdate(req.params.id, req.body, function (err, user) {
      if (err) return res.status(500).send('Error Trying update user')
      res.status(201).send(user)
    })
  }

  delete (req: Request, res: Response) {
    User.findByIdAndDelete(req.params.id)
      .then(result => {
        res.status(200).send('User removed')
      })
      .catch(err => {
        console.log(err)
        res.status(500).send('Problem removing User')
      })
  }

  takeAll (req: Request, res: Response) {
    User.find(function (err, users) {
      if (err) return res.status(500).send('Problem getting Users')
      return res.status(200).send(users)
    })
  }
}
