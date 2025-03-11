import React, { useState } from 'react';

interface User {
  name: string;
  email: string;
  imageLink: string;
  status: string;
}

const Header = () => {
  const users: User[] = [
    {
      name: 'John Doe',
      email: 'H9V0D@example.com',
      imageLink: 'https://cafdn.org/wp-content/uploads/2016/03/Melissa-young-people-in-profile-hero.webp',
      status: 'Online',
    },
    {
      name: 'Jane Doe',
      email: 'H9V0D@example.com',
      imageLink: 'https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWFsZSUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D',
      status: 'Offline',
    },
  ];

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const linkToShare = 'https://example.com/share-link';

  const handleCopyLink = () => {
    navigator.clipboard.writeText(linkToShare)
      .then(() => {
        alert('Link copied to clipboard!');
      })
      .catch(() => {
        alert('Failed to copy link.');
      });
  };

  return (
    <div className='bg-white shadow-md p-4 flex justify-between items-center'>
      {/* Users */}
      <div className='flex gap-4'>
        {users.map((user) => (
          <div key={user.email} className='flex items-center gap-2'>
            <img src={user.imageLink} alt={user.name} className='w-8 h-8 rounded-full' />
            <div>
              <h2 className='text-lg font-bold'>{user.name}</h2>
              <p className='text-sm text-gray-500'>{user.status}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Shear Code Button */}
      <div className='relative'>
        <button
          onClick={() => setIsPopupOpen(!isPopupOpen)}
          className='bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none'
        >
          Shear Code
        </button>

        {/* Popup Menu */}
        {isPopupOpen && (
          <div className='absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-10'>
            <div className='p-2'>
              <a
                href={linkToShare}
                target='_blank'
                rel='noopener noreferrer'
                className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md'
              >
                Open Link
              </a>
              <button
                onClick={handleCopyLink}
                className='w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md focus:outline-none'
              >
                Copy Link
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;