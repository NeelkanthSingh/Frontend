import React from 'react'
import { useRecoilValue } from 'recoil'
import { authAtom } from '../store/atoms/authAtom'
import { Button } from './Button'
import { useNavigate } from 'react-router-dom'

export const HeroSection = () => {
  const auth = useRecoilValue(authAtom)
  const navigate = useNavigate();

  return (
<div className='flex-1 flex flex-col justify-center'>
    <div className="max-w-7xl mx-auto lg:px-8 font-body ">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16 py-16">
        <div className="text-center lg:text-left">
          <h1 className="text-gray-900 mb-6 font-heading">
            <span className="block text-[22px]">Your Ultimate Document Version Control Simplified</span>
            <span className="block text-[#22c55e] py-4 text-[34px] font-bold">
              Version Vault Hub
            </span>
            <span className="block text-[18px]">
               <VersionVaultHubInfo />
            </span>
          </h1>
          <div className="space-x-4 font-base">
            {!auth?.accessToken && (
              <Button onClick={() => navigate("/dashboard")}>
                Get Started
              </Button>
            )}
          </div>
        </div>
        <div className="hidden lg:flex justify-end ">
          <img src="https://img.freepik.com/free-vector/browsing-online-concept-illustration_114360-4319.jpg?w=740&t=st=1710472612~exp=1710473212~hmac=5834a3f3f3b03bbd3207c20e321530a62c4629066d0d2485ba7a0bfbcd510f78"/>
        </div>
      </div>
    </div>
</div>
  )
}


function VersionVaultHubInfo() {
  return (
    <div>
      <Introduction /><br />
      <Features />
    </div>
  );
}

function Introduction() {
  return (
    <section>
      In the digital age, keeping your documents up-to-date shouldn't be a chore. At VersionVaultHub, we understand
      the importance of efficiency and consistency.
    </section>
  );
}

function Features() {
  return (
    <section>
      That's why we've created a groundbreaking platform designed for students and professionals alike, enabling
      you to create a single, public link for your documents that automatically updates to the latest version. No
      more constant link changes. No more hassle.
    </section>
  );
}
