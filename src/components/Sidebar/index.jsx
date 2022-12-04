import { useDispatch } from 'react-redux'
import { logout } from '../../features/users/usersSlice'
import { url } from 'gravatar'
import './index.scss'

export default function Sidebar() {
    // dispatch function from redux
    const dispatch = useDispatch()

    return (
        <div className="sidebar">
            <div className="sidebar-top">
                <div className="user-info">
                    <div className="avatar">
                        <img
                            src={url('fuhadhasan479@gmail.com', {
                                size: 30
                            })}
                            alt=""
                        />
                    </div>
                    <h3>Fuhad Hasan</h3>
                </div>
                <button
                    type="button"
                    onClick={() => dispatch(logout(undefined))}
                >
                    Logout
                </button>
            </div>
        </div>
    )
}
