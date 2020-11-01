const currentTime = new Date().toLocaleTimeString()

// @desc			Test endpoint is working
// @route 		GET /test
router.get('/test', (req, res) => {
  res.status(200).json({ message: `Endpoint ${currentTime}` })
})

// @desc			Get all cars
// @route 		GET /
router.get('/', (req, res) => {})

// @desc			Get a car by id
// @route 		GET /:id
router.get('/:id', (req, res) => {})

// @desc			Add a new car
// @route 		POST /
router.post('/', (req, res) => {})

// @desc			Update a car by id
// @route 		PUT /:id
router.put('/:id', (req, res) => {})

// @desc			Remove a car by id
// @route 		DELETE /:id
router.delete('/:id', (req, res) => {})
