import React from 'react'

const IconicaCard = ({ data }: { data: IconicaCardData }) => <div></div>

export const App = () => (
  <div>
    <IconicaCard
      data={{
        faction: 'Independent',
        archetype: 'Fairewood Ring Master',
        health: 180,
        affiliation: 'Cirqus of the Three Moons',
        description: {
          race: 'Sidrani',
          gender: 'M',
          home: 'Fairewood',
        },
        type: 'X',
        healthMeter: {
          nullifiers: [
            { nullifierIcon: { filename: 'sleep.png', prevents: 'Sleep' } },
            { nullifierIcon: 'Courage', tileRange: [10, 80] },
          ],
        },
        portraitFilename: 'fairewood-ring-master.png',
        class: 'Supportive',
        cardType: 'Special',
        actions: {
          passive: {
            iconFilename: 'aura.png',
            title: 'Aura of Originality',
            description:
              'While this Ring Master is in play, the actions of your party members cannot be used or copied by others characters.',
          },
          actionBreak: 6,
          actions: [
            {
              title: 'Call Status',
              type: 'Stance',
              description:
                "If a Status action is not used during your opponent's next turn, deal 30 damage to one foe.",
            },
            (null as unknown) as CharacterAction,
            (null as unknown) as CharacterAction,
            (null as unknown) as CharacterAction,
            (null as unknown) as CharacterAction,
            (null as unknown) as CharacterAction,
          ],
          finalAct: {
            title: "Andrion's Elixir",
            description:
              'Roll a die. If you roll 6, grant Rejuvenation to one Fairewood cahracter, healing it of 10 damage per turn for the rest of the game. Use two blue markers to indicate Rejuvenation.',
          },
        },
        strengthBonus: {
          description:
            '+10 healing to *Urchyns* with action *#6*. (Ignores Auras)',
        },
      }}
    />
  </div>
)
export default App
