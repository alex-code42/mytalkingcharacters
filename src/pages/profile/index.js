import ProfileHeader from "@/components/Profile/Header"
import MyCreatedCharacters from "@/components/Profile/MyCharacters"
import Navbar from '@/components/Navbar';

export default function MyProfilePage(){
    return(
        <div>
        <Navbar/>
        <ProfileHeader/>
        <MyCreatedCharacters/>

        </div>
    )
}