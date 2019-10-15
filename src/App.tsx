import React from 'react'
import { CSSProperties } from '@emotion/serialize'

const CardData = React.createContext<IconicaCardData>(
  (null as unknown) as IconicaCardData,
)

const IconicaCard = ({
  data,
  width,
}: {
  data: IconicaCardData
  width: CSSProperties['width']
}) => (
  <CardData.Provider value={data}>
    <div
      css={{
        width,
        height: `calc(7/5 * ${width})`,
        background: 'white',
        borderRadius: `1%`,
        padding: `calc(${width}/40)`,
      }}
    >
      <div
        css={{
          height: '100%',
          width: '100%',
          background: '#1B0800',
          color: 'white',
          borderRadius: `calc(${width}/40)`,
        }}
      >
        <div
          css={{
            display: 'inline-block',
            height: '100%',
            width: '83%',
            background: 'white',
            borderRadius: `calc(${width}/40)`,
            paddingRight: '1%',
          }}
        >
          <div
            css={{
              height: '100%',
              width: '100%',
              background: '#1B0800',
              borderRadius: `calc(${width}/40)`,
            }}
          ></div>
        </div>
        <div
          css={{
            display: 'inline-block',
            height: '98.5%',
            width: '14%',
            margin: '1%',
          }}
        >
          <div
            css={{
              height: '4%',
              width: '100%',
              background: 'magenta',
            }}
          ></div>
          <div
            css={{
              height: '93%',
              width: '100%',
              background: 'white',
            }}
          ></div>
          <div
            css={{
              height: '3%',
              width: '100%',
              margin: '10%',
              verticalAlign: 'middle',
            }}
          >
            <strong>Reaction:</strong> 2/40
          </div>
        </div>
      </div>
    </div>
  </CardData.Provider>
)

export const App = () => (
  <div>
    <IconicaCard
      width="40rem"
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
