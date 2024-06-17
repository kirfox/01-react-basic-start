import Header from "./components/Header"
import TeachingSection from "./components/TeachingSection";
import DifferencesSection from "./components/DifferencesSection";
import TabsSection from "./components/TabsSection";
import FeedBackSection from "./components/FeedBackSection";
import { useState } from "react";
import EffectSection from "./components/EffectSection";

export default function App() {

  const [ tab, setTab ] = useState('effect')

  return (
    <>
      <Header></Header>
      <main>
        <TabsSection active={tab} onChange={(current) => setTab(current)}/>

        {tab === 'main' && (
          <>
            <TeachingSection />
            <DifferencesSection />
          </>
        )}
        
        { tab === 'feedback' && <FeedBackSection />}

        { tab === 'effect' && <EffectSection />}
        
      </main>
    </>
  )
}
