import './App.css';
import { TwitterFollowCard } from './TwitterFollowCard.jsx';

export function App() {

    const users = [
        { userName: "franciscovaldezdev", name: "Francisco Valdez", initializeIsFollowing: true },
        { userName: "midudev", name: "Miguel Angel Duran", initializeIsFollowing: false },
        { userName: "elonmusk", name: "Elon Musk", initializeIsFollowing: false },
        { userName: "pablomonteserin", name: "Pablo Monteserin", initializeIsFollowing: true },
        { userName: "josemariagv", name: "Jose Maria G. Valdes", initializeIsFollowing: false },

    ];
    
    return (
        <section className='App'>
            {
                users.map(({ userName, name, initializeIsFollowing }) => (
                <TwitterFollowCard key={userName} userName={userName} initializeIsFollowing={initializeIsFollowing}>
                    {name}
                </TwitterFollowCard>
            ))
            }

        </section>   
  )
}