import React from 'react'
import { profile } from '../../imports'

const Team = () => {
  return (
    <div className='pt-30'>
      <p className="text-center text-3xl font-bold text-darkGreen mb-10">MEET THE TEAM</p>
                {/* Image Section (Now defaults to second on mobile) */}
          <div className="flex-1 flex justify-center lg:order-1"> {/* Added lg:order-1 */}
            {/*
              Crucial Change: Changed max-w-sm to max-w-xs on mobile
              to prevent the profile image from dominating the screen.
              Added mb-10 for separation when stacked.
            */}
            <div className="flex flex-col items-center text-center max-w-xs sm:max-w-sm mb-10 lg:mb-0">
              {/* Profile Image */}
              <img
                src={profile}
                alt="AltWaste about"
                className="w-full rounded-xl object-cover shadow-lg"
                /* Added h-64 or h-80 (fixed height) for mobile 
                  if h-1/2 was problematic. I'll remove h-1/2 
                  and use aspect-square/aspect-video with a max-h 
                  for better responsiveness.
                */
              />

              {/* Name & Titles */}
              <div className="mt-4">
                <h3 className="text-[#008060] font-semibold text-lg">
                  Dr. Nnanna-jnr Okoro{" "}
                  <span className="italic font-normal text-gray-600">PhD. Chem Eng. (Wits), COREN, MNSE, SACI</span>
                </h3>

                <p className="text-gray-600 mt-1 text-sm font-bold">
                  CEO/Head of Technology – Bioenergy/Biofuels 
                </p>
              </div>
            </div>
          </div>
    </div>
  )
}

export default Team
