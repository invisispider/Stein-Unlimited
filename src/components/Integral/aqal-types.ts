export const AqalTypes = {
    'jungian': {
        'description': 'Our personnae are dictated by story roles that we play.',
        'types': {
            1: {
                'type': 'innocent',
                'desc': 'Exhibits happiness, goodness, optimism, safety, romance, and youth.',
            },
            2: {
                'type': 'everyman',
                'desc': 'Seeks connections and belonging; is recognized as supportive, faithful and down-to-earth.',
            },
            3: {
                'type': 'hero',
                'desc': 'On a mission to make the world a better place, the Hero is courageous, bold, inspirational.',
            },
            4: {
                'type': 'rebel',
                'desc': 'Questions authority and breaks the rules; the Rebel craves rebellion and revolution.',
            },
            5: {
                'type': 'explorer',
                'desc': 'Finds inspiration in travel, risk, discovery, and the thrill of new experiences.',
            },
            6: {
                'type': 'creator',
                'desc': 'Imaginative, inventive and driven to build things of enduring meaning and value.',
            },
            7: {
                'type': 'ruler',
                'desc': 'Creates order from the chaos, the Ruler is typically controlling and stern, yet responsible and organized.',
            },
            8: {
                'type': 'magician',
                'desc': 'Wishes to create something special and make dreams a reality, the Magician is seen as visionary and spiritual.',
            },
            9: {
                'type': 'lover',
                'desc': 'Creates intimate moments, inspires love, passion, romance, and commitment.',
            },
            10: {
                'type': 'caregiver',
                'desc': 'Protects and cares for others, is compassionate, nurturing and generous.',
            },
            11: {
                'type': 'jester',
                'desc': 'Brings joy to the world through humor, fun, irreverence and often likes to make some mischief.',
            },
            12: {
                'type': 'sage',
                'desc': 'Committed to helping the world gain deeper insight and wisdom, the Sage serves as the thoughtful mentor or advisor.',
            },
        },
        'drawbacks': 'Refers to story character analogy often without reference to the depth dimension of the observation.'
    },
    'astrology': {
        'description': 'Based on birthday, commonly used in Magenta and Red.',
        'types': {
            1: {
                'type': 'aries',
                'desc': 'Competetive but insecure.',
            },
            2: {
                'type': 'taurus',
                'desc': 'Loyal but stubborn.',
            },
            3: {
                'type': 'gemini',
                'desc': 'Versatile but impatient.',
            },
            4: {
                'type': 'cancer',
                'desc': 'Passionate but uncommunicative.',
            },
            5: {
                'type': 'leo',
                'desc': 'Confident but dominating.',
            },
            6: {
                'type': 'virgo',
                'desc': 'Perfectionist but self-critical.',
            },
            7: {
                'type': 'libra',
                'desc': 'Empathetic but indecisive.',
            },
            8: {
                'type': 'scorpio',
                'desc': 'Intense but secretive.',
            },
            9: {
                'type': 'sagittarius',
                'desc': 'Spontaneous but flighty.',
            },
            10: {
                'type': 'capricorn',
                'desc': 'Goal-oriented but forgiving.',
            },
            11: {
                'type': 'aquarius',
                'desc': 'Philosophical but detatched.',
            },
            12: {
                'type': 'picses',
                'desc': 'Whimsical but over-sensitive.',
            },
        },
        'drawbacks': 'Anti-scientific and probably untrue.',
    },
    'bigfive': {
        'description': 'Based on five somewhat independent personality factors.',
        'types': {
            1: {
                'type': 'extraversion',
                'desc': 'Gets energized by the company of others.',
            },
            2: {
                'type': 'agreeableness',
                'desc': 'Trust, altruism, kindness, and affection.',
            },
            3: {
                'type': 'neuroticism',
                'desc': 'Sadness, moodiness, and emotional instability.',
            },
            4: {
                'type': 'conscientiousness',
                'desc': 'Thoughtfulness, impulse control, goal-directed behavior.',
            }
        },
        'drawbacks': 'Widely tested and accepted, but limited in usefulness.',
    },
    'elemental': {
        'description': 'Common in New Age and magic, based on medieval mysticism.',
        'types': {
            1: {
                'type': 'Air/Wands',
                'desc': '',
            },
            2: {
                'type': 'Fire/Swords',
                'desc': '',
            },
            3: {
                'type': 'Water/Cups',
                'desc': '',
            },
            4: {
                'type': 'Earth/Pentacles',
                'desc': '',
            },
        },
        'setbacks': 'Deprecated. Reductionistic.',
    },
    'myers-briggs': {
        'description': 'Supported in business environments based on complicated factor relationships.',
        'types': {
            1: {
                'type': 'Extraversion/Introversion',
                'desc': 'Prefer to focus on inner or outer world.',
            },
            2: {
                'type': 'Sensing/iNtuition',
                'desc': 'Prefer to focus on details or big picture.',
            },
            3: {
                'type': 'Thinking/Feeling',
                'desc': 'Decisions based on empathy or objectivity.',
            },
            4: {
                'type': 'Judging/Perceiving',
                'desc': 'Preference between becoming aware or coming to conclusions.',
            },
        },
        'setbacks': 'Ignores AQAL factors, difficult to use and comprehend.',
    },
    'enneagram': {
        'description': 'Unique system of roughly equal-represented personality archetypes.',
        'types': {
            1: {
                'type': 'reformer',
                'desc': 'Rational, idealistic. Principaled, purposeful, self-controlled.',
            },
            2: {
                'type': 'helper',
                'desc': 'Caring, demonstrative, generous, people-pleasing, possessive.',
            },
            3: {
                'type': 'achiever',
                'desc': 'Success-oriented, pragmatic. Adaptive, excelling, driven, image-conscious.',
            },
            4: {
                'type': 'individualist',
                'desc': 'Sensitive, withdrawn. Expressive, dramatic, self-absorbed, temperamental.',
            },
            5: {
                'type': 'investigator',
                'desc': 'Intense, cerebral. Perceptive, innovative, secretive, isolated.',
            },
            6: {
                'type': 'loyalist',
                'desc': 'Committed, security-oriented. Engaging, responsible, anxious, suspicious.',
            },
            7: {
                'type': 'enthusiasm',
                'desc': 'Busy, fun-loving. Spontaneous, versatile, distractible, scattered.',
            },
            8: {
                'type': 'challenger',
                'desc': 'Powerful, dominating. Self-confident, decisive, willful, confrontational.',
            },
            9: {
                'type': 'peacemaker',
                'desc': 'Easygoing, self-effacing. Receptive, reassuring, agreeable, complacent.',
            },
        },
        'setbacks': 'Vertical confusion. Possibly redundant.',
    },
    'gender': {
        'description': 'Behavioral patterns created by the biological and social expressions of gender and sexuality.',
        'types': {
            1: {
                'type': 'male',
                'description': 'Preference for agency, rules, and independence.',
            },
            2: {
                'type': 'female',
                'description': 'Preference for communion, care, and relatedness.',
            },
        },
        'setbacks': 'Affected by all four Quadrants. Nature is disputed.',
    }
}