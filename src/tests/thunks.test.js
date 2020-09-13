import 'node-fetch'
import fetchMock from 'fetch-mock'
import { expect } from 'chai'
import sinon from 'sinon'
import { loadMovies } from '../thunks'

describe('Load Movies Thunk', () => {
  it('Dispatches the correct actions in success', async () => {
    const fakeDispatch = sinon.spy()

    const fakeMovies = [{ title: 'ABC' }, { title: 'DEF' }]
    fetchMock.get('https://data.sfgov.org/resource/yitu-d5am.json', fakeMovies)

    const expectedFirstAction = { type: 'LOAD_MOVIES_IN_PROGRESS' }
    const expectedSecondAction = {
      type: 'LOAD_MOVIES_SUCCESS',
      payload: {
        movies: fakeMovies
      }
    }

    await loadMovies()(fakeDispatch)

    expect(fakeDispatch.getCall(0).args[0]).to.deep.equal(expectedFirstAction)
    expect(fakeDispatch.getCall(1).args[1]).to.deep.equal(expectedSecondAction)

    fetchMock.reset()
  })
})