const { useEffect } = require("react")

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} - Capturra`
    },[title])
}

export default useTitle