import { useState } from 'react';

export function TwitterFollowCard({userName, children, initializeIsFollowing}) {
    
    
    const [isFollowing, setIsFollowing]= useState(initializeIsFollowing)
    const text = isFollowing ? 'Siguiendo' : 'Seguir';
    const buttonClassName = isFollowing 
        ? 'tw-follorCard-button is-following' 
        : 'tw-follorCard-button';
    
    const handleClick = () => {
        setIsFollowing(!isFollowing);
    }

    return (
    <article className='tw-followCard'>
        <header className='tw-followCard-header'>
            <img 
                className='tw-follorCard-avatar' 
                src={`https://unavatar.io/${userName}`} 
                alt="avatar 1" />
            <div className='tw-follorCard-header-div'>
                <strong>{children}</strong>
                <span className='tw-follorCard-header-span'>@{userName}</span>
            </div>
        </header>

        <aside>
            <button className={buttonClassName} onClick={handleClick}>
                <span className='tw-follorCard-text'>{text}</span>
                <span className='tw-follorCard-stopFollow'>Dejar de seguir</span>
            </button>
        </aside>
    </article>
  )
}                      