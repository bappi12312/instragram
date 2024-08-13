const asyncHandler = (handler) => {
  return (req,res,next) => {
    Promise.resolve(handler(req,res,next)).catch((err) => next(err))
  }
}

export {asyncHandler}

// pMhreDLZErDHaHNS

// const asyncHandler = (fn) => async (req,res,next) => {
//   try {
//     await fn(req,res,next)
//   } catch (error) {
//     res.status(error.code || 500).json({
//       success: false,
//       message: error.message
//     })
//   }
// }