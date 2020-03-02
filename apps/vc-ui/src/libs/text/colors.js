import {get}  from '../helpers/ajax'
import {HASH} from '../helpers/hash'

var colorText

export async function loadColors(
	locale
) {
	if (colorText) {
		return colorText
	}

	const text = await get(`./assets/text/${locale}/colors${HASH}.json`)
	colorText  = JSON.parse(text)

	return colorText
}
