const { expect } = require('chai')
const toMs = require('../src/to-ms.js')

const msInDay = 86400000
const msInHour = 3600000
const msInMin = 60000
const msInSec = 1000

describe('Tests', () => {
	it('should test days to ms', () => {
		expect(toMs('1 day')).to.equal(msInDay, '1 day')
		expect(toMs('1day')).to.equal(msInDay, '1day')
		expect(toMs('1 days')).to.be.equal(msInDay, '1 days')
		expect(toMs('1days')).to.equal(msInDay, '1days')

		expect(toMs('3 days')).to.equal(msInDay * 3, '3 days')
		// expect(toMs('1.45 days')).to.equal(msInDay * 1.45, '1.45 day')
		// expect(toMs('.15 days')).to.equal(msInDay * 0.15, '.15 days')
		// expect(toMs('0.15 days')).to.equal(msInDay * 0.15, '0.15 days')
	})

	it('should test hours to ms', () => {
		expect(toMs('1 hr')).to.equal(msInHour, '1 hr')
		expect(toMs('1hr')).to.equal(msInHour, '1hr')
		expect(toMs('1 hrs')).to.be.equal(msInHour, '1 hrs')
		expect(toMs('1hrs')).to.equal(msInHour, '1hrs')
		expect(toMs('1 hour')).to.equal(msInHour, '1 hour')
		expect(toMs('1hour')).to.equal(msInHour, '1hour')
		expect(toMs('1 hours')).to.equal(msInHour, '1 hours')
		expect(toMs('1hours')).to.equal(msInHour, '1hours')

		expect(toMs('2 hr')).to.equal(msInHour * 2, '2 hr')
		// expect(toMs('2.34 hr')).to.equal(msInHour * 2.34, '2.34 hr')
		// expect(toMs('.62 hr')).to.equal(msInHour * 0.62, '.62 hr')
		// expect(toMs('0.54 hr')).to.equal(msInHour * 0.54, '0.54 hr')
	})

	it('should test minutes to ms', () => {
		expect(toMs('1 min')).to.equal(msInMin, '1 min')
		expect(toMs('1min')).to.equal(msInMin, '1min')
		expect(toMs('1 minute')).to.be.equal(msInMin, '1 minute')
		expect(toMs('1minute')).to.equal(msInMin, '1minute')
		expect(toMs('1 minutes')).to.equal(msInMin, '1 minutes')
		expect(toMs('1minutes')).to.equal(msInMin, '1minutes')

		expect(toMs('2 min')).to.equal(msInMin * 2, '2 min')
		// expect(toMs('2.34 min')).to.equal(msInMin * 2.34, '2.34 min')
		// expect(toMs('.62 min')).to.equal(msInMin * 0.62, '.62 min')
		// expect(toMs('0.54 min')).to.equal(msInMin * 0.54, '.54 min')
	})

	it('should test seconds to ms', () => {
		expect(toMs('1 sec')).to.equal(msInSec, '1 sec')
		expect(toMs('1sec')).to.equal(msInSec, '1sec')
		expect(toMs('1 second')).to.be.equal(msInSec, '1 second')
		expect(toMs('1second')).to.equal(msInSec, '1second')
		expect(toMs('1 seconds')).to.equal(msInSec, '1 seconds')
		expect(toMs('1seconds')).to.equal(msInSec, '1seconds')

		expect(toMs('6 sec')).to.equal(msInSec * 6, '6 sec')
		// expect(toMs('3.22 sec')).to.equal(msInSec * 3.22, '3.22 sec')
		// expect(toMs('.62 sec')).to.equal(msInSec * 0.62, '.62 sec')
		// expect(toMs('0.54 sec')).to.equal(msInSec * 0.54, '0.54 sec')
	})
})
