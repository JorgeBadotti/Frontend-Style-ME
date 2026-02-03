import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { MOCK_LOOK_SUGGESTION, RoutePath } from '../../../constants';

export const useLookDetailLogic = () => {
  const navigate = useNavigate();
  const { lookId } = useParams<{ lookId: string }>();
  const [showFeedbackModal, setShowFeedbackModal] = useState<boolean>(false);
  const [isWorn, setIsWorn] = useState<boolean>(false);

  // In a real app, fetch look details based on lookId
  const look = MOCK_LOOK_SUGGESTION; // Using mock data for now

  const handleLookAction = (action: 'like' | 'dislike' | 'wear') => {
    if (action === 'dislike') {
      console.log(`User disliked look: ${look.name}`);
      setShowFeedbackModal(true);
    } else if (action === 'wear') {
      console.log(`User marked look as worn: ${look.name}`);
      setIsWorn(true);
      alert(`Look "${look.name}" marcado como usado!`);
      // navigate(RoutePath.Home);
    } else if (action === 'like') {
      console.log(`User liked look: ${look.name}`);
      alert(`Look "${look.name}" salvo nos favoritos!`);
      // navigate(RoutePath.Home);
    }
  };

  const handleItemDetailClick = (itemId: string) => {
    navigate(RoutePath.ItemDetail.replace(':itemId', itemId));
  };

  const handleFeedbackSubmit = (feedback: string[]) => {
    console.log('Feedback submitted:', feedback);
    // Process feedback, then dismiss modal
    setShowFeedbackModal(false);
    navigate(RoutePath.Home);
  };

  const handleGoBack = () => {
      navigate(-1);
  }

  const handleCloseFeedbackModal = () => {
      setShowFeedbackModal(false);
  }

  return {
    look,
    showFeedbackModal,
    isWorn,
    handleLookAction,
    handleItemDetailClick,
    handleFeedbackSubmit,
    handleGoBack,
    handleCloseFeedbackModal
  };
};
