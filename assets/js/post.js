document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.author-overlay').forEach(overlay => {
        const modelUrl = overlay.dataset.modelUrl
        const authorUrl = overlay.dataset.authorUrl
        const avatar = overlay.querySelector('.author-avatar')
        const name = overlay.querySelector('.author-name')

        if (avatar) {
            avatar.style.cursor = 'pointer'
            avatar.addEventListener('click', e => {
                e.stopPropagation()
                window.location.href = modelUrl
            })
        }

        if (name) {
            name.style.cursor = 'pointer'
            name.addEventListener('click', e => {
                e.stopPropagation()
                window.location.href = authorUrl
            })
        }

        overlay.addEventListener('click', () => {
            window.location.href = authorUrl
        })
    })
})