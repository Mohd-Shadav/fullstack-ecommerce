import React from 'react'
import { Link } from 'react-router-dom'
import styles from './FooterItems.module.css'

function FooterItems() {
  return (
    <div className={`${styles['mainCont']}`}>

        <div className={`${styles['itemDiv']}`}>
            <span>Fruits & Vegetables</span>

            <ul>
                <li><Link>Fresh Vegetables</Link></li>
                <li><Link>Herbs & Seasonings</Link></li>
                <li><Link>Fresh Fruits</Link></li>
                <li><Link>Cuts & Sprouts</Link></li>
                <li><Link>Exotic Fruits & Veggies</Link></li>
                <li><Link>Packaged Produce</Link></li>
                <li><Link>Party Trays</Link></li>
            </ul>
        </div>
        <div className={`${styles['itemDiv']}`}>
            <span>Breakfast & Dairy</span>

            <ul>
                <li><Link>Fresh Vegetables</Link></li>
                <li><Link>Herbs & Seasonings</Link></li>
                <li><Link>Fresh Fruits</Link></li>
                <li><Link>Cuts & Sprouts</Link></li>
                <li><Link>Exotic Fruits & Veggies</Link></li>
                <li><Link>Packaged Produce</Link></li>
                <li><Link>Party Trays</Link></li>
            </ul>
        </div>
        <div className={`${styles['itemDiv']}`}>
            <span>Meat & Seafood</span>

            <ul>
                <li><Link>Fresh Vegetables</Link></li>
                <li><Link>Herbs & Seasonings</Link></li>
                <li><Link>Fresh Fruits</Link></li>
                <li><Link>Cuts & Sprouts</Link></li>
                <li><Link>Exotic Fruits & Veggies</Link></li>
                <li><Link>Packaged Produce</Link></li>
                <li><Link>Party Trays</Link></li>
            </ul>
        </div>
        <div className={`${styles['itemDiv']}`}>
            <span>Beverages</span>

            <ul>
                <li><Link>Fresh Vegetables</Link></li>
                <li><Link>Herbs & Seasonings</Link></li>
                <li><Link>Fresh Fruits</Link></li>
                <li><Link>Cuts & Sprouts</Link></li>
                <li><Link>Exotic Fruits & Veggies</Link></li>
                <li><Link>Packaged Produce</Link></li>
                <li><Link>Party Trays</Link></li>
            </ul>
        </div>

    </div>
  )
}

export default FooterItems