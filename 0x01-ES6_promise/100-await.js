import uploadPhoto from './5-photo-reject.js'; // Adjust the import based on your file structure
import createUser from './4-user-promise.js'; // Adjust the import based on your file structure

export default async function asyncUploadUser() {
  try {
    const photoResponse = await uploadPhoto('photo-profile-1.jpg'); // Use a relevant filename
    const userResponse = await createUser('Guillaume', 'Salva');
    
    return {
      photo: photoResponse,
      user: userResponse,
    };
  } catch (error) {
    return {
      photo: null,
      user: null,
    };
  }
}
