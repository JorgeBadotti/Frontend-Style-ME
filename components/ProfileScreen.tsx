import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from '../constants';
import { UserProfile, Gender } from '../types';

interface ProfileScreenProps {
  // onLogout: () => void; // Passed from App.tsx via Layout for consistency
}

const ProfileScreen: React.FC<ProfileScreenProps> = () => {
  const navigate = useNavigate();
  const [profile, setProfile] = useState<UserProfile>({
    name: 'Jane Doe',
    email: 'jane.doe@example.com',
    height: "5'8\"",
    weight: '135 lbs',
    stylePreference: 'Minimalist Chic',
    whatsapp: '+1 (555) 000-0000',
    gender: Gender.FEMALE,
    avatarUrl: 'https://picsum.photos/80/80?random=100', // Mock avatar
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setProfile(prev => ({ ...prev, [id]: value }));
  };

  const handleSaveProfile = (event: React.FormEvent) => {
    event.preventDefault();
    console.log('Profile saved:', profile);
    // In a real app, this would involve API calls to update the user profile.
    alert('Profile updated successfully!');
  };

  const handleLogout = () => {
    console.log('Logging out...');
    // This action would typically be handled by the parent App component's onLogout
    // For this mock, we'll navigate to login
    navigate(RoutePath.Login);
  };

  const handleEditAvatar = () => {
    // Navigate to a screen for capturing/selecting a new profile photo
    navigate(RoutePath.BodyPhotoCapture);
  };

  return (
    <div className="h-full flex flex-col items-center py-8 bg-background-light dark:bg-background-dark animate-fade-in">
      <div className="flex flex-col items-center mb-10 text-center">
        <div className="mb-4 opacity-80 dark:opacity-100">
          <svg className="text-primary" fill="none" height="36" viewBox="0 0 48 36" width="48" xmlns="http://www.w3.org/2000/svg">
            <path d="M24 2C24 2 20 2 20 6C20 8 22 9 24 9C26 9 28 8 28 6C28 2 24 2 24 2Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2"></path>
            <path d="M24 9V14M24 14L4 30H44L24 14Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2"></path>
          </svg>
        </div>
        <h1 className="text-3xl font-display font-medium text-primary dark:text-slate-200 mb-2 tracking-luxury-lg uppercase">
          Style Me
        </h1>
        <p className="text-[10px] tracking-luxury-xl font-sans text-text-muted dark:text-slate-400 uppercase">
          Personal Styling
        </p>
      </div>

      <div className="w-full max-w-[400px] bg-card-light dark:bg-card-dark rounded-4xl ios-shadow p-8 flex flex-col gap-6">
        <div className="flex flex-col items-center mb-2">
          <div className="relative">
            <div className="w-24 h-24 rounded-full bg-background-light dark:bg-slate-800 border-4 border-white dark:border-slate-700 shadow-lg flex items-center justify-center overflow-hidden">
              {profile.avatarUrl ? (
                <img src={profile.avatarUrl} alt="User Avatar" className="w-full h-full object-cover" />
              ) : (
                <span className="material-symbols-outlined text-4xl text-slate-400 dark:text-slate-500">person</span>
              )}
            </div>
            <button
              className="absolute bottom-0 right-0 bg-primary text-white p-2 rounded-full shadow-md hover:scale-105 transition-transform"
              onClick={handleEditAvatar}
            >
              <span className="material-symbols-outlined text-xs">edit</span>
            </button>
          </div>
        </div>

        <form className="space-y-5" onSubmit={handleSaveProfile}>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="luxury-label block" htmlFor="height">Height</label>
              <input
                id="height"
                className="luxury-input text-slate-700 dark:text-slate-200 placeholder:text-slate-300 dark:placeholder:text-slate-600"
                placeholder="5'8\""
                type="text"
                value={profile.height}
                onChange={handleChange}
              />
            </div>
            <div className="space-y-2">
              <label className="luxury-label block" htmlFor="weight">Weight</label>
              <input
                id="weight"
                className="luxury-input text-slate-700 dark:text-slate-200 placeholder:text-slate-300 dark:placeholder:text-slate-600"
                placeholder="135 lbs"
                type="text"
                value={profile.weight}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="luxury-label block" htmlFor="stylePreference">Style Preference</label>
            <div className="relative">
              <select
                id="stylePreference"
                className="luxury-input appearance-none text-slate-700 dark:text-slate-200"
                value={profile.stylePreference}
                onChange={handleChange}
              >
                <option>Minimalist Chic</option>
                <option>Avant-Garde</option>
                <option>Streetwear Luxury</option>
                <option>Classic Professional</option>
              </select>
              <div className="absolute inset-y-0 right-5 flex items-center pointer-events-none">
                <span className="material-symbols-outlined text-slate-400 text-sm">expand_more</span>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <label className="luxury-label block" htmlFor="whatsapp">Whatsapp</label>
            <input
              id="whatsapp"
              className="luxury-input text-slate-700 dark:text-slate-200 placeholder:text-slate-300 dark:placeholder:text-slate-600"
              placeholder="+1 (555) 000-0000"
              type="tel"
              value={profile.whatsapp}
              onChange={handleChange}
            />
          </div>

          <div className="pt-4">
            <button
              type="submit"
              className="w-full bg-primary text-white py-5 rounded-full font-sans font-semibold tracking-widest uppercase text-sm shadow-lg shadow-primary/30 hover:opacity-90 transition-opacity active:scale-[0.98]"
            >
              Save Profile
            </button>
          </div>
        </form>

        <div className="flex items-center gap-4 py-2">
          <div className="h-[1px] flex-1 bg-slate-100 dark:bg-slate-700"></div>
          <span className="text-[9px] font-bold tracking-widest text-slate-400 dark:text-slate-500 uppercase">Social Access</span>
          <div className="h-[1px] flex-1 bg-slate-100 dark:bg-slate-700"></div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <button className="flex items-center justify-center gap-3 py-4 rounded-2xl border border-slate-50 dark:border-slate-800 bg-card-light dark:bg-card-dark ios-shadow hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 384 512">
              <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 21.8-88.5 21.8-11.4 0-51.1-20.8-82.9-20.1-41.9.8-81 25.1-102.6 62.4-43.8 75.9-11.3 188.4 31.2 249.4 20.8 29.8 45.9 63 78.4 61.8 30.7-1.2 42.4-19.8 79.4-19.8 36.9 0 47.7 19.8 79.9 19.1 33.3-.6 54.8-29.8 75.4-59.7 23.9-34.6 33.8-68.2 34-69.9-1-.5-65.5-25.2-66.2-100.3zM288.8 89c15.6-18.9 25.9-45.1 23-71.4-22.6 1-49.8 15.2-65.9 34.1-14.5 16.8-27.1 43.8-23.7 69.4 25.1 2 51.1-13.1 66.6-32.1z"></path>
            </svg>
            <span className="text-[10px] font-bold tracking-widest uppercase text-slate-800 dark:text-slate-200">Apple</span>
          </button>
          <button className="flex items-center justify-center gap-3 py-4 rounded-2xl border border-slate-50 dark:border-slate-800 bg-card-light dark:bg-card-dark ios-shadow hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">
            <svg className="w-4 h-4" fill="#4285F4" viewBox="0 0 488 512">
              <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path>
            </svg>
            <span className="text-[10px] font-bold tracking-widest uppercase text-slate-800 dark:text-slate-200">Google</span>
          </button>
        </div>
      </div>

      <div className="mt-10 mb-8 flex gap-2 items-center">
        <span className="text-[11px] tracking-wide text-slate-400 dark:text-slate-500 uppercase">Want to sign out?</span>
        <button className="text-[11px] tracking-wide font-bold text-primary dark:text-link-blue uppercase hover:underline" onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
};

export default ProfileScreen;