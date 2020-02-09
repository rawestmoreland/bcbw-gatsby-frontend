const FORM_SENT = 'FORM_SENT'

export const formSentToggle = formSent => ({
  type: FORM_SENT,
  formSent,
})

const initialState = {
  formSent: false,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case FORM_SENT:
      return { ...state, formSent: action.formSent }
    default:
      return state
  }
}
