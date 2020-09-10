import {APP_CONTAINER, forms} from '@votecube/vc-logic'

export async function loadForms() {
	const formsModule = await import('@votecube/forms')

	forms.set(formsModule)

	return await APP_CONTAINER.get(formsModule.FORM_FACTORY)
}
