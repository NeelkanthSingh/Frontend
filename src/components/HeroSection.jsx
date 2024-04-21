import { useRecoilValue } from 'recoil';
import { authAtom } from '../store/atoms/authAtom';
import { Button } from './Button';
import { useNavigate } from 'react-router-dom';

export const HeroSection = () => {
  const auth = useRecoilValue(authAtom);
  const navigate = useNavigate();

  return (
    <div className='flex-1 flex flex-col justify-center'>
      <div className="max-w-7xl mx-auto lg:px-8 font-body">
        <div className="grid grid-cols-1 lg:grid-cols-3 items-center gap-16 py-16">
          <div className="hidden lg:flex justify-end w-80">
            <img src="heroSection.png" alt="Illustration" />
          </div>
          <div className="text-center lg:text-left col-span-2 flex justify-center">
            <h1 className="text-gray-900 mb-6 font-heading text-center">
              <span className="block text-[#2d503a] text-[28px]">Your Ultimate Document Version Control Simplified</span>
              <span className="block text-[#22c55e] py-4 text-[48px] font-bold">
                Version Vault Hub
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
        </div>
      </div>
    </div>
  );
};

function VersionVaultHubInfo() {
  return (
    <div>
      <Introduction />
      <br />
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
