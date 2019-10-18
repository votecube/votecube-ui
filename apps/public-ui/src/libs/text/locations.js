import {get}     from '../../common/ajax'
import {setText} from './setText'

export var loadLocations = async (
	store,
	locale
) => {
	const text = await get(`./text/${locale}/locations.json`)

	return setText(store, text)
}
// switch (locale) {
//     case 'en-us': {
// import('@votecube/text_en-us/lib/locations').then(text => setText(store, text))
// break
// }
// }
