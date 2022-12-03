import { url } from 'gravatar'
import './index.scss'

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar-top">
                <div className="user-info">
                    <div className="avatar">
                        <img
                            src={url('fuhadhasan479@gmail.com', { size: 30 })}
                            alt=""
                        />
                    </div>
                    <h3>Fuhad Hasan</h3>
                </div>
                <button type="button">Logout</button>
            </div>
        </div>
    )
}
