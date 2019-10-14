type Filename = string

type RynagaFaction = 'Independent' | 'Legion' | 'Protectorate'
type CharacterClass = 'Supportive' | 'Defensive' //| todo
type CardType = 'Special' | 'Rare' | 'Uncommon' | 'Common'

type StatusEffect = 'Poison' | 'Confusion' //| todo
type NullifierIcon =
  | 'Antidote'
  | 'Focus'
  | 'Courage'
  // | todo
  | { filename: Filename; prevents: string }

type InfluenceIcon = 'X'

type Immunity = { nullifierIcon: NullifierIcon }
type Nullifier =
  | Immunity
  | Partial<Immunity> &
  (
    | { tile: number }
    | { tileRange: [number, number] }
    | { tileList: number[] })

type PassiveAbility = {
  iconFilename: Filename
  title: string
  description: string
}
type ActionType = 'Support' | 'Status' | 'Stance' //| todo
type CharacterAction = { title: string; type: ActionType; description: string }
type FinalAct = Omit<CharacterAction, 'type'>
type CharacterActions = {
  passive?: PassiveAbility
  actions: [
    CharacterAction,
    CharacterAction,
    CharacterAction,
    CharacterAction,
    CharacterAction,
    CharacterAction,
  ]
  actionBreak: number
  finalAct: FinalAct
}

interface IconicaCardData {
  faction: RynagaFaction
  archetype: string
  health: number
  affiliation: string
  description: {
    race: string
    gender: 'M' | 'F' | string
    home: string
  }
  type: InfluenceIcon
  healthMeter: {
    start?: number
    nullifiers: Nullifier[]
  }
  portraitFilename: Filename
  class: CharacterClass
  cardType: CardType
  actions: CharacterActions
  strengthBonus: {
    description: string
  }
}
