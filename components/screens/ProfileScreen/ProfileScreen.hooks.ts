import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserProfile, Gender } from '../../../types';
import { RoutePath } from '../../../constants';

export const useProfileLogic = () => {
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

  return {
    profile,
    handleChange,
    handleSaveProfile,
    handleLogout,
    handleEditAvatar,
    styleOptions
  };
};
