import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from '../../constants';
import { UserProfile, Gender } from '../../types';
import Icon from '../atoms/Icon/Icon';
import TextElement from '../atoms/TextElement/TextElement';
import Input from '../atoms/Input/Input';
import Button from '../atoms/Button/Button';
import GenUIImage from '../atoms/Image/Image';
import SocialButton from '../molecules/SocialButton/SocialButton';

interface ProfileScreenProps {}

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
    avatarUrl: 'https://picsum.photos/80/80?random=100',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setProfile(prev => ({ ...prev, [id]: value }));
  };

  const handleSaveProfile = (event: React.FormEvent) => {
    event.preventDefault();
    console.log('Profile saved:', profile);
    alert('Profile updated successfully!');
  };

  const handleLogout = () => {
    console.log('Logging out...');
    navigate(RoutePath.Login);
  };

  const handleEditAvatar = () => {
    navigate(RoutePath.BodyPhotoCapture);
  };

  const styleOptions = [
    { value: 'Minimalist Chic', label: 'Minimalist Chic' },
    { value: 'Avant-Garde', label: 'Avant-Garde' },
    { value: 'Streetwear Luxury', label: 'Streetwear Luxury' },
    { value: 'Classic Professional', label: 'Classic Professional' },
  ];

  return (
    <div className="h-full flex flex-col items-center py-8 bg-background-light dark:bg-background-dark animate-fade-in">
      <div className="flex flex-col items-center mb-10 text-center">
        <div className="mb-4 opacity-80 flex justify-center dark:opacity-100">
          <svg className="text-primary" fill="none" height="36" viewBox="0 0 48 36" width="48" xmlns="http://www.w3.org/2000/svg">
            <path d="M24 2C24 2 20 2 20 6C20 8 22 9 24 9C26 9 28 8 28 6C28 2 24 2 24 2Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2"></path>
            <path d="M24 9V14M24 14L4 30H44L24 14Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2"></path>
          </svg>
        </div>
        <TextElement variant="h1" as="h1" font="display" weight="medium" spacing="luxury-lg" className="text-3xl text-primary uppercase mb-2 dark:text-slate-200">
          Style Me
        </TextElement>
        <TextElement variant="p" font="sans" spacing="luxury-xl" className="text-[10px] text-text-muted uppercase dark:text-slate-400">
          Personal Styling
        </TextElement>
      </div>

      <div className="w-full max-w-[400px] bg-card-light rounded-4xl ios-shadow p-8 flex flex-col gap-6 dark:bg-card-dark dark:shadow-none">
        <div className="flex flex-col items-center mb-2">
          <div className="relative">
            {profile.avatarUrl ? (
              <GenUIImage src={profile.avatarUrl} alt="User Avatar" className="w-24 h-24 rounded-full border-4 border-card-light shadow-lg object-cover dark:bg-slate-800 dark:border-slate-700" />
            ) : (
              <Icon name="person" size="xl" className="text-4xl text-slate-400 dark:text-slate-500" />
            )}
            <Button variant="iconOnly" className="absolute bottom-0 right-0 bg-primary text-card-light p-2 rounded-full shadow-md hover:scale-105" onClick={handleEditAvatar}>
              <Icon name="edit" size="xs" />
            </Button>
          </div>
        </div>

        <form className="flex flex-col gap-5" onSubmit={handleSaveProfile}>
          <div className="grid grid-cols-2 gap-4">
            <Input
              label="Height"
              placeholder="5'8\""
              type="text"
              id="height"
              value={profile.height}
              onChange={handleChange}
            />
            <Input
              label="Weight"
              placeholder="135 lbs"
              type="text"
              id="weight"
              value={profile.weight}
              onChange={handleChange}
            />
          </div>

          <Input
            label="Style Preference"
            type="select"
            id="stylePreference"
            options={styleOptions}
            value={profile.stylePreference}
            onChange={handleChange}
          />

          <Input
            label="Whatsapp"
            placeholder="+1 (555) 000-0000"
            type="tel"
            id="whatsapp"
            value={profile.whatsapp}
            onChange={handleChange}
          />

          <div className="pt-4">
            <Button type="submit" className="w-full bg-primary text-card-light py-5 rounded-full font-semibold tracking-widest uppercase text-sm shadow-lg hover:opacity-90 active:scale-98">
              Save Profile
            </Button>
          </div>
        </form>

        <div className="flex items-center gap-4 py-2">
          <div className="h-px flex-1 bg-slate-100 dark:bg-slate-700"></div>
          <TextElement variant="small" weight="bold" spacing="widest" className="text-[9px] font-bold tracking-widest text-slate-400 uppercase dark:text-slate-500">Social Access</TextElement>
          <div className="h-px flex-1 bg-slate-100 dark:bg-slate-700"></div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <SocialButton provider="apple" />
          <SocialButton provider="google" />
        </div>
      </div>

      <div className="mt-10 mb-8 flex gap-2 items-center">
        <TextElement variant="span" spacing="wide" className="text-[11px] tracking-wide text-slate-400 uppercase dark:text-slate-500">Want to sign out?</TextElement>
        <Button variant="ghost" className="text-[11px] tracking-wide font-bold text-primary uppercase hover:underline dark:text-link-blue" onClick={handleLogout}>Logout</Button>
      </div>
    </div>
  );
};

export default ProfileScreen;
