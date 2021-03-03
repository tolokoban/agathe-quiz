type IQuiz = Array<string[]>

const QUIZ = [
    ['produits de contraste iodé', 'etablir diagnostic'],
    ['vaccins', 'prevention'],
    ['antalgiques', 'paracetamol', 'symptoms'],
    ['antibiotiques', 'amoxicilline', 'curatif'],
    ['heparine', 'origine animale'],
    ['Ci2CO3', '// minerale'],
    ['anticorps monoclonaux', '// biotechnologique'],
    ['medocs derives du sang', '// humain'],
    ['aspirine', 'paracetamole', '// synthetique, molecules organiques'],
    ['morphine', 'papauer somniferum', '// vegetale'],
    ['GF', 'hormones', 'cytokines', 'anticorps (inflixumab)', 'proteique'],
    ['ataluren', 'myopathie de duchenne', 'oligonucleotidique'],
    ['antifongique', '5-glusitosine', 'anticancereux', '5-fluoraunaute', 'analogues de bases puriques'],
    ['antidiabetique oral (gliclazide)', 'antibiotique (sulfamethoxaede)', 'sulfamide'],
    ['doliprane', 'efferalgan', 'acetaminophene (ENG)'],
    ['amoxicilline + acide clamulanique', 'augmentin'],
    ['B2 mimetiques', 'possible phenomene de tolerance'],
    ['analgesiques opioides', 'morphine, codecine, fentanyl, ocycodone //'],
    ['salbutamol', 'formoterol', 'terbutaline', 'salmeterol', 'B2 numetique, asthme'],
    ['atenolol', 'propranolol', 'bisoprolol', 'celiprolol', 'B bloquant', 'hypertension, insuffisance cardiaque'],
    ['benzodiazepine', 'alprazolam', 'bromazepam', 'diazepam', 'anxiete et convulsions'],
    ['dexamethasone', 'prednisolane', 'prednisane', 'agonistes GR', 'corticoide, anti-inflammatoire'],
    ['tamoxifine', 'antagoniste ER', 'cancer du sein'],
    ['verapamil', 'diltiazom', 'dihydropyridine', 'bloqueurs canaux Ca++ voltage dependants', 'hypertension arterial (car vasorelax), modif echanges ioniques (comme degoxine qui bloque pompe)'],
    ['omepraxole', 'pantoprazole', 'rabeprazole', 'inhibiteur pompe a H+', 'acidite gastrique, ulcere'],
    ['fluoxetine', 'paroxetine', 'sertraline', 'inhibiteur recapture sepatonine par SERT', 'antidepresseur'],
    ['ibuprophene', 'diclofenac', 'peroxicam', 'anti-inflammatoires non steroidiens', 'effet antalgique MAIS toxicite gastrique', 'inhibiteur de COX (cycloxygenase) comme aspirine', 'interaction au metabolisme basal'],
    ['insuline', 'hormone hypoglycemanite', 'diabete 1', 'substitution'],
    ['bicarbonate ou alginate de sodium', 'antiacide', "brulures d'estomac", 'interaction physico-chimique = cible'],
    ['antiueraux', 'lopenavir = protease', 'antifongiques', 'triazoles fluconazole', 'anti=parasitaire', 'benzimidazoles', 'flubondazole', 'flubondazole'],
    ['infliximab', "neutralise TNFa (cytolrine de l'inflammation)", 'anti-inflammatoire'],
    ['etanercept', 'tocilizumab', 'antago des rcp aux cytokines', 'anti-inflammatoire']
]

export default QUIZ