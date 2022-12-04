import { useSelector } from 'react-redux'

export function useAuth() {
    const { accessToken } = useSelector((state) => state.users)

    if (accessToken) {
        return true
    } else {
        return false
    }
}
