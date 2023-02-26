// const router = require('express').Router();

// const { User, Blog, Comment } = require('../../models');

// router.get('/', (req, res) => {
//   Comment.findAll({ include: [User, Blog] })
//     .then((dbComments) => {
//       res.json(dbComments);
//     })
//     .catch((err) => {
//       console.log(err);
//       res.status(500).json({ msg: 'Oops', err });
//     });
// });

// router.get('/:id', (req, res) => {
//   Comment.findByPk(req.params.id, { include: [User, Blog] })
//     .then((dbComment) => {
//       res.json(dbComment);
//     })
//     .catch((err) => {
//       console.log(err);
//       res.status(500).json({ msg: 'Oops', err });
//     });
// });

// router.post('/', (req, res) => {
//   if (!req.session.user) {
//     return res.status(401).json({ message: 'Please log in.' });
//   }
//   Comment.create({
//     body: req.body.body,
//     userId: req.session.user.id,
//     blogId: req.body.blogId,
//   })
//     .then((newComment) => {
//       res.json(newComment);
//     })
//     .catch((err) => {
//       console.log(err);
//       res.status(500).json(err);
//     });
// });

// router.put('/:id', (req, res) => {
//   if (!req.session.user) {
//     return res.status(401).json({ message: 'Please log in' });
//   }

//   Comment.update(req.body, {
//     where: {
//       id: req.params.id,
//     },
//   })
//     .then((updatedComment) => {
//       res.json(updatedComment);
//     })
//     .catch((err) => {
//       console.log(err);
//       res.status(500).json({ message: 'Oops!', err });
//     });
// });

// router.delete('/:id', (req, res) => {
//   if (!req.session.user) {
//     return res.status(401).json({ message: 'Please log in' });
//   }

//   Comment.destroy({
//     where: {
//       id: req.params.id,
//     },
//   })
//     .then((delComment) => {
//       res.json(delComment);
//     })
//     .catch((err) => {
//       console.log(err);
//       res.status(500).json(err);
//     });
// });

// module.exports = router;
