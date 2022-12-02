window.addEventListener('beforeunload', (event) => {
    event.returnValue = "Tab is attempting to close. Are you sure you want to leave?"
})