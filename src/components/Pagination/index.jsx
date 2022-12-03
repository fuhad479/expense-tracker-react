import { ArrowLeftIcon, ArrowRightIcon } from '@radix-ui/react-icons'
import './index.scss'

export default function Pagination() {
    return (
        <div className="pagination-wrapper">
            <div className="text">Lorem, ipsum dolor.</div>
            <div className="pagination">
                <div className="icon">
                    <ArrowLeftIcon />
                </div>
                <div className="icon">
                    <ArrowRightIcon />
                </div>
            </div>
        </div>
    )
}
