import React from 'react'
import NewsLetterSection from './NewsLetterSection'
import ManiFestoComp from './ManiFestoComp'
import FooterItems from './FooterItems'
import CopyrightDescription from '../Home/LandingPageDocs/CopyrightDescription'

function FooterComponent() {
  return (
    <footer className={`mt-4`}>
       <NewsLetterSection/>
       <ManiFestoComp/>
       <FooterItems/>
       <CopyrightDescription/>
        </footer>
  )
}

export default FooterComponent