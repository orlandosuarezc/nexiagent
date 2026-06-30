// Anything with "null" requires a translation. Contribute to translation via a PR!
// Galician (Galego) - based on Spanish (es/common.js)
const TRANSLATIONS = {
  onboarding: {
    home: {
      getStarted: "Comezar",
      welcome: "Benvido",
    },
    llm: {
      title: "Preferencia de LLM",
      description:
        "Nexiagent pode funcionar con moitos provedores de LLM. Este será o servizo que xestionará o chat.",
    },
    userSetup: {
      title: "Configuración de usuario",
      description: "Configura os axustes do teu usuario.",
      howManyUsers: "¿Cantos usuarios utilizarán esta instancia?",
      justMe: "Só eu",
      myTeam: "O meu equipo",
      instancePassword: "Contrasinal da instancia",
      setPassword: "¿Desexas establecer un contrasinal?",
      passwordReq: "Os contrasinais deben ter polo menos 8 caracteres.",
      passwordWarn:
        "É importante gardar este contrasinal porque non hai método de recuperación.",
      adminUsername: "Nome de usuario do administrador",
      adminPassword: "Contrasinal da conta de administrador",
      adminPasswordReq: "Os contrasinais deben ter polo menos 8 caracteres.",
      teamHint:
        "Por defecto, serás o único administrador. Unha vez completada a incorporación, podes crear e invitar a outros a ser usuarios ou administradores. Non perdas o teu contrasinal, xa que só os administradores poden restablecer os contrasinais.",
    },
    data: {
      title: "Manexo de datos e privacidade",
      description:
        "Estamos comprometidos coa transparencia e o control no que respecta aos teus datos persoais.",
      settingsHint:
        "Estes axustes pódense reconfigurar en calquera momento na configuración.",
    },
    survey: {
      title: "Benvido a Nexiagent",
      description:
        "Axúdanos a facer que Nexiagent se adapte ás túas necesidades. Opcional.",
      email: "¿Cal é o teu correo electrónico?",
      useCase: "¿Para que usarás Nexiagent?",
      useCaseWork: "Para o traballo",
      useCasePersonal: "Para uso persoal",
      useCaseOther: "Outro",
      comment: "¿Como te enteraches de Nexiagent?",
      commentPlaceholder:
        "Reddit, Twitter, GitHub, YouTube, etc. - ¡Fáznos saber como nos atopaches!",
      skip: "Omitir enquisa",
      thankYou: "¡Grazas polos teus comentarios!",
    },
  },
  common: {
    "workspaces-name": "Nome dos espazos de traballo",
    selection: "Selección de modelo",
    saving: "Gardando...",
    save: "Gardar cambios",
    previous: "Páxina anterior",
    next: "Páxina seguinte",
    optional: "Opcional",
    yes: "Si",
    no: "Non",
    search: "Buscar",
    username_requirements:
      "O nome de usuario debe ter entre 2 e 64 caracteres, comezar cunha letra minúscula e só conter letras minúsculas, números, guions baixos, guions e puntos.",
    on: "En",
    none: "Ningún",
    stopped: "Parado",
    loading: "Cargando",
    refresh: "Actualizar",
  },
  settings: {
    title: "Axustes da instancia",
    invites: "Invitacións",
    users: "Usuarios",
    workspaces: "Espazos de traballo",
    "workspace-chats": "Chats do espazo de traballo",
    customization: "Personalización",
    interface: "Preferencias da interface de usuario",
    branding: "Marca e marca branca",
    chat: "Chat",
    "api-keys": "API de desenvolvedor",
    llm: "LLM",
    transcription: "Transcrición",
    embedder: "Incrustador (Embedder)",
    "text-splitting": "División de texto e fragmentación",
    "voice-speech": "Voz e fala",
    "vector-database": "Base de datos vectorial",
    embeds: "Incrustacións de chat",
    security: "Seguridade",
    "event-logs": "Rexistros de eventos",
    privacy: "Privacidade e datos",
    "ai-providers": "Provedores de IA",
    "agent-skills": "Habilidades do axente",
    admin: "Administrador",
    tools: "Ferramentas",
    "system-prompt-variables": "Variables de prompt do sistema",
    "experimental-features": "Funcións experimentais",
    contact: "Contactar con soporte",
    "browser-extension": "Extensión do navegador",
    "mobile-app": "Nexiagent Móbil",
    "community-hub": {
      title: "Centro comunitario",
      trending: "Explora as tendencias máis populares",
      "your-account": "A súa conta",
      "import-item": "Importar artigo",
    },
    channels: "Canles",
    "available-channels": {
      telegram: "Telegram",
    },
    "scheduled-jobs": "Tarefas programadas",
    "model-router": "Router de exemplo",
  },
  login: {
    "multi-user": {
      welcome: "Benvido a",
      "placeholder-username": "Nome de usuario",
      "placeholder-password": "Contrasinal",
      login: "Iniciar sesión",
      validating: "Validando...",
      "forgot-pass": "Esquezo o meu contrasinal",
      reset: "Restablecer",
    },
    "sign-in": "Inicia sesión na túa conta de {{appName}}.",
    "password-reset": {
      title: "Restablecemento de contrasinal",
      description:
        "Proporciona a información necesaria a continuación para restablecer o teu contrasinal.",
      "recovery-codes": "Códigos de recuperación",
      "back-to-login": "Volver ao inicio de sesión",
    },
  },
  "main-page": {
    quickActions: {
      createAgent: "Crear un axente",
      editWorkspace: "Editar espazo de traballo",
      uploadDocument: "Cargar un documento",
    },
    greeting: "¿Como podo axudarte hoxe?",
  },
  "new-workspace": {
    title: "Novo espazo de traballo",
    placeholder: "O meu espazo de traballo",
  },
  "workspaces—settings": {
    general: "Axustes xerais",
    chat: "Axustes de chat",
    vector: "Base de datos vectorial",
    members: "Membros",
    agent: "Configuración do axente",
  },
  general: {
    vector: {
      title: "Reconto de vectores",
      description: "Número total de vectores na túa base de datos vectorial.",
    },
    names: {
      description:
        "Isto só cambiará o nome para mostrar do teu espazo de traballo.",
    },
    message: {
      title: "Mensaxes de chat suxeridas",
      description:
        "Personaliza as mensaxes que se suxerirán aos usuarios do teu espazo de traballo.",
      add: "Engadir nova mensaxe",
      save: "Gardar mensaxes",
      heading: "Explícame",
      body: "os beneficios de Nexiagent",
    },
    delete: {
      title: "Eliminar espazo de traballo",
      description:
        "Elimina este espazo de traballo e todos os seus datos. Isto eliminará o espazo de traballo para todos os usuarios.",
      delete: "Eliminar espazo de traballo",
      deleting: "Eliminando espazo de traballo...",
      "confirm-start": "Estás a piques de eliminar todo o teu",
      "confirm-end":
        "espazo de traballo. Isto eliminará todas as incrustacións de vectores na túa base de datos vectorial.\n\nOs ficheiros fonte orixinais permanecerán intactos. Esta acción é irreversible.",
    },
  },
  chat: {
    llm: {
      title: "Provedor de LLM do espazo de traballo",
      description:
        "O provedor e modelo de LLM específico que se utilizará para este espazo de traballo. Por defecto, utiliza o provedor e a configuración de LLM do sistema.",
      search: "Buscar todos os provedores de LLM",
    },
    model: {
      title: "Modelo de chat do espazo de traballo",
      description:
        "O modelo de chat específico que se utilizará para este espazo de traballo. Se está baleiro, utilizará a preferencia de LLM do sistema.",
    },
    mode: {
      title: "Modo de chat",
      chat: {
        title: "Chat",
        description:
          'proporcionará respostas utilizando o coñecemento xeral do LLM e o contexto do documento atopado.<br />Deberá utilizar o comando "@agent" para utilizar as ferramentas.',
      },
      query: {
        title: "Consulta",
        description:
          'proporcionará respostas <b>só</b> se se atopa o contexto do documento.<br />Deberá utilizar o comando "@agent" para utilizar as ferramentas.',
      },
      automatic: {
        description:
          'utilizará automaticamente as ferramentas se o modelo e o provedor admiten a chamada a ferramentas nativas. Se non se admite a chamada a ferramentas nativas, deberá utilizar o comando "@agent" para utilizar as ferramentas.',
        title: "Axente",
      },
    },
    history: {
      title: "Historial de chat",
      "desc-start":
        "O número de chats anteriores que se incluirán na memoria a curto prazo da resposta.",
      recommend: "Recomendado 20.",
    },
    prompt: {
      title: "Prompt do sistema",
      description:
        "O prompt que se utilizará neste espazo de traballo. Define o contexto e as instrucións para que a IA xere unha resposta. Debes proporcionar un prompt coidadosamente elaborado para que a IA poida xerar unha resposta relevante e precisa.",
      history: {
        title: "Historial de prompts do sistema",
        clearAll: "Borrar todo",
        noHistory: "Non hai historial de prompts do sistema dispoñible",
        restore: "Restaurar",
        delete: "Eliminar",
        publish: "Publicar no Centro da Comunidade",
        deleteConfirm:
          "¿Estás seguro de que queres eliminar este elemento do historial?",
        clearAllConfirm:
          "¿Estás seguro de que queres borrar todo o historial? Esta acción non se pode desfacer.",
        expand: "Expandir",
      },
    },
    refusal: {
      title: "Resposta de rexeitamento en modo de consulta",
      "desc-start": "Cando esteas en modo de",
      query: "consulta",
      "desc-end":
        ", é posible que desexes devolver unha resposta de rexeitamento personalizada cando non se atope contexto.",
      "tooltip-title": "¿Por que vexo isto?",
      "tooltip-description":
        "Estás en modo de consulta, que só utiliza información dos teus documentos. Cambia ao modo de chat para conversas máis flexibles, ou fai clic aquí para visitar a nosa documentación e obter máis información sobre os modos de chat.",
    },
    temperature: {
      title: "Temperatura do LLM",
      "desc-end":
        "Canto maior sexa o número, máis creativo. Para algúns modelos, isto pode levar a respostas incoherentes se se establece un valor demasiado alto.",
    },
  },
  "vector-workspace": {
    identifier: "Identificador da base de datos vectorial",
    snippets: {
      title: "Fragmentos de contexto máximos",
      description:
        "Esta configuración controla a cantidade máxima de fragmentos de contexto que se enviarán ao LLM por chat ou consulta.",
      recommend: "Recomendado: 4",
    },
    doc: {
      title: "Limiar de similitude de documentos",
      description:
        "A puntuación de similitude mínima requirida para que unha fonte se considere relacionada co chat. Canto maior sexa o número, máis similar debe ser a fonte ao chat.",
      zero: "Sen restrición",
      low: "Baixo (puntuación de similitude ≥ .25)",
      medium: "Medio (puntuación de similitude ≥ .50)",
      high: "Alto (puntuación de similitude ≥ .75)",
    },
    reset: {
      reset: "Restablecer base de datos vectorial",
      resetting: "Borrando vectores...",
      confirm:
        "Estás a piques de restablecer a base de datos vectorial deste espazo de traballo. Isto eliminará todas as incrustacións de vectores actualmente incrustadas.\n\nOs ficheiros fonte orixinais permanecerán intactos. Esta acción é irreversible.",
      error:
        "¡Non se puido restablecer a base de datos vectorial do espazo de traballo!",
      success:
        "¡A base de datos vectorial do espazo de traballo restablecéuse!",
    },
  },
  agent: {
    "performance-warning":
      "O rendemento dos LLM que non admiten explicitamente a chamada a ferramentas depende en gran medida das capacidades e a precisión do modelo. Algunhas habilidades poden ser limitadas ou non funcionais.",
    provider: {
      title: "Provedor de LLM do axente do espazo de traballo",
      description:
        "O provedor e modelo de LLM específico que se utilizará para o axente @agent deste espazo de traballo.",
    },
    mode: {
      chat: {
        title: "Modelo de chat do axente do espazo de traballo",
        description:
          "O modelo de chat específico que se utilizará para o axente @agent deste espazo de traballo.",
      },
      title: "Modelo de axente do espazo de traballo",
      description:
        "O modelo de LLM específico que se utilizará para o axente @agent deste espazo de traballo.",
      wait: "-- agardando modelos --",
    },
    skill: {
      rag: {
        title: "RAG e memoria a longo prazo",
        description:
          'Permite que o axente aproveite os teus documentos locais para responder unha consulta ou pídelle ao axente que "recorde" fragmentos de contido para a recuperación de memoria a longo prazo.',
      },
      view: {
        title: "Ver e resumir documentos",
        description:
          "Permite que o axente liste e resuma o contido dos ficheiros do espazo de traballo actualmente incrustados.",
      },
      scrape: {
        title: "Extraer sitios web",
        description:
          "Permite que o axente visite e extraia o contido dos sitios web.",
      },
      generate: {
        title: "Xerar gráficos",
        description:
          "Habilita ao axente predeterminado para xerar varios tipos de gráficos a partir de datos proporcionados ou dados no chat.",
      },
      web: {
        title: "Busca e navegación web en vivo",
        description:
          "Permite que o seu axente acceda a internet para responder ás súas preguntas, conectándoo a un provedor de busca web (SERP).",
      },
      sql: {
        title: "Conector SQL",
        description:
          "Permite que o seu axente poida utilizar SQL para responder ás súas preguntas, conectándose con diferentes provedores de bases de datos SQL.",
      },
      default_skill:
        "Por defecto, esta función está activada, pero pode desactivala se non desexa que estea dispoñible para o axente.",
      filesystem: {
        title: "Acceso ao sistema de ficheiros",
        description:
          "Permite que o seu axente poida ler, escribir, buscar e administrar ficheiros dentro dun directorio específico. Admite a edición de ficheiros, a navegación por directorios e a busca de contido.",
        learnMore: "Aprenda máis sobre como utilizar esta habilidade.",
        configuration: "Configuración",
        readActions: "Ler accións",
        writeActions: "Accións a realizar",
        warning:
          "O acceso ao sistema de ficheiros pode ser perigoso, xa que pode modificar ou eliminar ficheiros. Consulte a <a>documentación</a> antes de habilitalo.",
        skills: {
          "read-text-file": {
            title: "Abrir ficheiro",
            description:
              "Ler o contido de ficheiros (texto, código, ficheiros PDF, imaxes, etc.)",
          },
          "read-multiple-files": {
            title: "Ler varios ficheiros",
            description: "Ler varios ficheiros á vez.",
          },
          "list-directory": {
            title: "Directorio",
            description:
              "Enumera os ficheiros e directorios dentro dunha carpeta.",
          },
          "search-files": {
            title: "Buscar ficheiros",
            description: "Busque ficheiros por nome ou contido.",
          },
          "get-file-info": {
            title: "Obter información do ficheiro",
            description:
              "Obteña información detallada sobre os metadatos dos ficheiros.",
          },
          "edit-file": {
            title: "Editar ficheiro",
            description:
              "Realiza modificacións baseadas en liñas en ficheiros de texto.",
          },
          "create-directory": {
            title: "Crear directorio",
            description: "Crear novas carpetas",
          },
          "move-file": {
            title: "Mover/Cambiar o nome do ficheiro",
            description: "Mover ou renomear ficheiros e directorios.",
          },
          "copy-file": {
            title: "Copiar ficheiro",
            description: "Copiar ficheiros e directorios",
          },
          "write-text-file": {
            title: "Crear un ficheiro de texto",
            description:
              "Cree novos ficheiros de texto ou sobescriba ficheiros de texto existentes.",
          },
        },
      },
      createFiles: {
        title: "Creación de documentos",
        description:
          "Permite que o seu axente cree formatos de documentos binarios como presentacións de PowerPoint, follas de cálculo de Excel, documentos de Word e ficheiros PDF. Os ficheiros pódense descargar directamente desde a xanela de chat.",
        configuration: "Tipos de documentos dispoñibles",
        skills: {
          "create-text-file": {
            title: "Ficheiros de texto",
            description:
              "Cree ficheiros de texto con calquera contido e extensión (por exemplo, .txt, .md, .json, .csv, etc.).",
          },
          "create-pptx": {
            title: "Presentacións en PowerPoint",
            description:
              "Crea novas presentacións de PowerPoint con diapositivas, títulos e viñetas.",
          },
          "create-pdf": {
            title: "Documentos en formato PDF",
            description:
              "Cree documentos PDF a partir de ficheiros Markdown ou texto plano, cun estilo básico.",
          },
          "create-xlsx": {
            title: "Follas de cálculo de Excel",
            description:
              "Cree documentos de Excel para datos tabulares, con follas e opcións de formato.",
          },
          "create-docx": {
            title: "Documentos de Microsoft Word",
            description:
              "Crea documentos de Word cun estilo e formato básicos.",
          },
        },
      },
      gmail: {
        title: "Conector de GMail",
        description:
          "Permite que o seu axente interactúe con Gmail: buscar correos electrónicos, ler fíos, redactar borradores, enviar correos electrónicos e xestionar a súa bandexa de entrada. <a>Consulte a documentación</a>.",
        multiUserWarning:
          "A integración con Gmail non está dispoñible no modo para múltiples usuarios por razóns de seguridade. Para utilizar esta función, por favor, desactive o modo para múltiples usuarios.",
        configuration: "Configuración de Gmail",
        deploymentId: "ID de despregamento",
        deploymentIdHelp:
          "O ID de implementación da túa aplicación web de Google Apps Script",
        apiKey: "Chave API",
        apiKeyHelp:
          "A chave de API que configuraches na implementación do teu Google Apps Script.",
        configurationRequired:
          "Por favor, configure o ID de implementación e a chave de API para habilitar as funcións de Gmail.",
        configured: "Configurado",
        searchSkills: "Habilidades de busca...",
        noSkillsFound: "Non se atoparon coincidencias coa túa busca.",
        categories: {
          search: {
            title: "Buscar e ler correos electrónicos",
            description:
              "Busque e lea correos electrónicos da súa bandexa de entrada de Gmail.",
          },
          drafts: {
            title: "Modelos de correos electrónicos",
            description:
              "Crea, edita e xestiona borradores de correo electrónico.",
          },
          send: {
            title: "Enviar e responder a correos electrónicos",
            description:
              "Envía correos electrónicos e responde ás conversas de inmediato.",
          },
          threads: {
            title: "Xestionar fíos de correo electrónico",
            description:
              "Xestionar fíos de correo electrónico: marcar como lido/non lido, arquivar, eliminar",
          },
          account: {
            title: "Estatísticas de integración",
            description:
              "Visualice estatísticas da bandexa de entrada e información da conta.",
          },
        },
        skills: {
          search: {
            title: "Buscar correos electrónicos",
            description:
              "Busque correos electrónicos utilizando a sintaxe de consulta de Gmail.",
          },
          readThread: {
            title: "Ler o fío",
            description:
              "Le a conversa completa de correo electrónico, ordenada por ID.",
          },
          createDraft: {
            title: "Crear borrador",
            description: "Crea un novo borrador de correo electrónico.",
          },
          createDraftReply: {
            title: "Crear resposta preliminar",
            description:
              "Cree unha resposta preliminar a un fío de discusión existente.",
          },
          updateDraft: {
            title: "Versión actualizada do borrador",
            description:
              "Actualizar un borrador de correo electrónico existente",
          },
          getDraft: {
            title: "Obter borrador",
            description: "Recuperar un borrador específico mediante o seu ID.",
          },
          listDrafts: {
            title: "Borradores",
            description: "Enumera todos os correos electrónicos en proxecto.",
          },
          deleteDraft: {
            title: "Eliminar borrador",
            description: "Eliminar un borrador de correo electrónico",
          },
          sendDraft: {
            title: "Enviar borrador",
            description: "Enviar unha versión previa dun correo electrónico.",
          },
          sendEmail: {
            title: "Enviar correo electrónico",
            description: "Envía un correo electrónico de inmediato.",
          },
          replyToThread: {
            title: "Responder á discusión",
            description:
              "Responder a unha conversa por correo electrónico de inmediato.",
          },
          markRead: {
            title: "Marcar como lido",
            description: "Indicar que un fío foi lido.",
          },
          markUnread: {
            title: "Marcar como non lido",
            description: "Indicar que un fío está sen ler.",
          },
          moveToTrash: {
            title: "Mover ao lixo",
            description: "Mover un fío ao lixo",
          },
          moveToArchive: {
            title: "Arquivo",
            description: "Arquivar un fío de conversa",
          },
          moveToInbox: {
            title: "Mover á bandexa de entrada",
            description: "Mover un fío á bandexa de entrada",
          },
          getMailboxStats: {
            title: "Estatísticas da bandexa de entrada",
            description:
              "Obtén o número de correos non lidos e estatísticas da bandexa de entrada.",
          },
          getInbox: {
            title: "Acceder á bandexa de entrada",
            description:
              "Unha forma sinxela de acceder aos correos electrónicos da bandexa de entrada de Gmail.",
          },
        },
      },
      outlook: {
        title: "Conector de Outlook",
        description:
          "Permite que o seu axente interactúe con Microsoft Outlook: buscar correos electrónicos, ler fíos, redactar borradores, enviar correos electrónicos e administrar a súa bandexa de entrada a través da API de Microsoft Graph. Consulte a documentación.",
        multiUserWarning:
          "A integración con Outlook non está dispoñible no modo multiusuario por razóns de seguridade. Para utilizar esta función, por favor, desactive o modo multiusuario.",
        configuration: "Configuración de Outlook",
        authType: "Tipo de conta",
        authTypeHelp:
          'Seleccione que tipos de contas de Microsoft poden autenticarse. "Todas as contas" admite tanto contas persoais como contas de traballo/escola. "Só contas persoais" limítase a contas persoais de Microsoft. "Só contas de organización" limítase a contas de traballo/escola dun inquilino específico de Azure AD.',
        authTypeCommon: "Todas as contas (persoais e de traballo/escola)",
        authTypeConsumers: "Contas persoais de Microsoft unicamente.",
        authTypeOrganization:
          "Contas de organizacións unicamente (require o ID do inquilino)",
        clientId: "Identificador do cliente (solicitante)",
        clientIdHelp:
          "O ID da aplicación (cliente) do seu rexistro de aplicación en Azure AD",
        tenantId: "ID do inquilino",
        tenantIdHelp:
          "O ID do directorio (do inquilino) do seu rexistro de aplicación en Azure AD. É necesario unicamente para a autenticación dentro dunha organización.",
        clientSecret: "Chave secreta",
        clientSecretHelp:
          "O valor secreto do cliente do seu rexistro de aplicación en Azure AD.",
        configurationRequired:
          "Por favor, configure o ID do cliente e a chave secreta para habilitar as funcións de Outlook.",
        authRequired:
          "Primeiro, garde as súas credenciais, e logo, utilice as credenciais para autenticarse con Microsoft e completar a configuración.",
        authenticateWithMicrosoft: "Autenticarse con Microsoft",
        authenticated: "Autenticación exitosa con Microsoft Outlook.",
        revokeAccess: "Revogar o acceso",
        configured: "Configurado",
        searchSkills: "Habilidades de busca...",
        noSkillsFound:
          "Non se atoparon resultados que coincidan coa túa busca.",
        categories: {
          search: {
            title: "Buscar e ler correos electrónicos",
            description:
              "Busque e lea correos electrónicos desde a súa bandexa de entrada de Outlook.",
          },
          drafts: {
            title: "Borradores de correos electrónicos",
            description:
              "Crea, edita e xestiona borradores de correos electrónicos.",
          },
          send: {
            title: "Enviar correos electrónicos",
            description:
              "Envía novos correos electrónicos ou responde ás mensaxes de inmediato.",
          },
          account: {
            title: "Estatísticas de integración",
            description:
              "Visualice as estatísticas da bandexa de entrada e a información da conta.",
          },
        },
        skills: {
          getInbox: {
            title: "Acceder á bandexa de entrada",
            description:
              "Consegue os últimos correos electrónicos da túa bandexa de entrada de Outlook.",
          },
          search: {
            title: "Buscar correos electrónicos",
            description:
              "Busque correos electrónicos utilizando a sintaxe de busca de Microsoft.",
          },
          readThread: {
            title: "Ler a conversa",
            description: "Ler toda a conversa por correo electrónico.",
          },
          createDraft: {
            title: "Crear borrador",
            description:
              "Cree un novo borrador de correo electrónico ou un borrador de resposta a unha mensaxe existente.",
          },
          updateDraft: {
            title: "Versión actualizada do borrador",
            description:
              "Actualizar un borrador de correo electrónico existente",
          },
          listDrafts: {
            title: "Borradores",
            description: "Enumere todos os correos electrónicos en borrador.",
          },
          deleteDraft: {
            title: "Eliminar borrador",
            description: "Eliminar un borrador de correo electrónico",
          },
          sendDraft: {
            title: "Enviar borrador",
            description: "Enviar un borrador de correo electrónico existente",
          },
          sendEmail: {
            title: "Enviar correo electrónico",
            description:
              "Envía un novo correo electrónico ou responde a unha mensaxe existente de inmediato.",
          },
          getMailboxStats: {
            title: "Estatísticas da bandexa de entrada",
            description:
              "Obtén o número de carpetas e estatísticas da bandexa de entrada.",
          },
        },
      },
      googleCalendar: {
        title: "Conector para Google Calendar",
        description:
          "Permite que o seu axente interactúe con Google Calendar: visualice calendarios, obteña información sobre eventos, cree e actualice eventos, e xestione as confirmacións de asistencia. <a>Consulte a documentación</a>.",
        multiUserWarning:
          "A integración con Google Calendar non está dispoñible no modo de varios usuarios por razóns de seguridade. Para utilizar esta función, por favor, desactive o modo de varios usuarios.",
        configuration: "Configuración de Google Calendar",
        deploymentId: "ID de implementación",
        deploymentIdHelp:
          "O ID de implementación da súa aplicación web de Google Apps Script",
        apiKey: "Chave de API",
        apiKeyHelp:
          "A chave API que configuraches na túa implementación de Google Apps Script.",
        configurationRequired:
          "Por favor, configure o ID de implementación e a chave de API para habilitar as funcións de Google Calendar.",
        configured: "Configurado",
        searchSkills: "Habilidades de busca...",
        noSkillsFound:
          "Non se atoparon resultados que coincidan coa túa busca.",
        categories: {
          calendars: {
            title: "Calendarios",
            description: "Visualiza e administra os teus calendarios de Google.",
          },
          readEvents: {
            title: "Ler eventos",
            description: "Visualice e busque eventos no calendario.",
          },
          writeEvents: {
            title: "Crear e actualizar eventos",
            description: "Crear novos eventos e modificar os existentes.",
          },
          rsvp: {
            title: "Xestión de confirmacións de asistencia",
            description: "Xestiona o estado das túas respostas para eventos.",
          },
        },
        skills: {
          listCalendars: {
            title: "Calendarios",
            description:
              "Enumere todos os calendarios que posúe ou aos que estea subscrito.",
          },
          getCalendar: {
            title: "Obtén os detalles do calendario",
            description:
              "Obteña información detallada sobre un calendario específico.",
          },
          getEvent: {
            title: "Obter información do evento",
            description:
              "Obteña información detallada sobre un evento específico.",
          },
          getEventsForDay: {
            title: "Atopa eventos para o día.",
            description:
              "Obtén todos os eventos programados para unha data específica.",
          },
          getEvents: {
            title: "Obter eventos (rango de datas)",
            description:
              "Obter eventos dentro dun rango de datas personalizado.",
          },
          getUpcomingEvents: {
            title: "Consulta os próximos eventos",
            description:
              "Atope eventos para hoxe, esta semana ou este mes utilizando palabras clave sinxelas.",
          },
          quickAdd: {
            title: "Engadir evento rapidamente",
            description:
              'Crear un evento a partir de linguaxe natural (por exemplo, "Reunión mañá ás 3 da tarde")',
          },
          createEvent: {
            title: "Crear evento",
            description:
              "Cree un novo evento con control total sobre todas as propiedades.",
          },
          updateEvent: {
            title: "Actualización do evento",
            description: "Actualizar un evento existente no calendario",
          },
          setMyStatus: {
            title: "Establecer estado de confirmación",
            description:
              "Aceptar, rexeitar ou aceptar provisionalmente un evento.",
          },
        },
      },
      mcp: {
        title: "Servidores MCP",
        "loading-from-config":
          "Cargar servidores MCP desde o ficheiro de configuración",
        "learn-more": "Aprenda máis sobre os servidores MCP.",
        "no-servers-found": "Non se atoparon servidores MCP.",
        "tool-warning":
          "Para obter o mellor rendemento, considere desactivar as ferramentas innecesarias para conservar o contexto.",
        "stop-server": "Deter o servidor MCP",
        "start-server": "Iniciar o servidor MCP",
        "delete-server": "Eliminar o servidor MCP",
        "tool-count-warning":
          "Este servidor de MCP ten <b> ferramentas habilitadas</b> que consumirán contexto en cada conversa.<br /> Considere desactivar as ferramentas non desexadas para aforrar contexto.",
        "startup-command": "Comando inicial",
        command: "Orde",
        arguments: "Argumentos",
        "not-running-warning":
          "Este servidor de MCP non está funcionando; podería estar detido ou estar experimentando un erro ao iniciarse.",
        "tool-call-arguments": "Argumentos de chamada de función",
        "tools-enabled": "ferramentas habilitadas",
      },
      settings: {
        title: "Configuración de habilidades do axente",
        "max-tool-calls": {
          title: "Número máximo de chamadas a funcións por resposta",
          description:
            "O número máximo de ferramentas que un axente pode encadear para xerar unha única resposta. Isto evita que se realicen chamadas a ferramentas de forma descontrolada e que se produzan bucles infinitos.",
        },
        "intelligent-skill-selection": {
          title: "Selección intelixente de habilidades",
          description:
            "Permite o uso ilimitado de ferramentas e reduce o consumo de tokens ata nun 80% por consulta: Nexiagent selecciona automaticamente as habilidades axeitadas para cada solicitude.",
          "max-tools": {
            title: "Ferramentas Max",
            description:
              "O número máximo de ferramentas que se poden seleccionar para cada consulta. Recomendamos establecer este valor nun número máis alto para modelos cun contexto máis amplo.",
          },
        },
        "clarifying-questions": {
          title: "Permitir que o axente formule preguntas para aclarar.",
          "beta-badge": "Versión de proba",
          description:
            "Cando estea activado, os axentes poderán facer pausas para formular preguntas aclaratorias breves se a súa solicitude é ambigua.",
          "max-per-turn": {
            title: "Número máximo de preguntas por quenda.",
            description:
              "¿Cantas preguntas de aclaración pode facer o axente nunha única enquisa?",
          },
        },
      },
    },
  },
  recorded: {
    title: "Chats do espazo de traballo",
    description:
      "Estes son todos os chats e mensaxes gravadas que foron enviadas polos usuarios, ordenados pola súa data de creación.",
    export: "Exportar",
    "viewing-text": "Vendo texto",
    table: {
      id: "ID",
      by: "Enviado por",
      workspace: "Espazo de traballo",
      prompt: "Prompt",
      response: "Resposta",
      at: "Enviado o",
    },
    delete: "Eliminar",
    "delete-all": "Eliminar todos",
    "delete-all-confirm": "Seguro que queres eliminar todos os chats? Esta acción é irreversible.",
  },
  customization: {
    interface: {
      title: "Preferencias da interface de usuario",
      description:
        "Establece as túas preferencias da interface de usuario para Nexiagent.",
    },
    branding: {
      title: "Marca e marca branca",
      description:
        "Personaliza a túa instancia de Nexiagent coa túa propia marca.",
    },
    chat: {
      title: "Chat",
      description: "Establece as túas preferencias de chat para Nexiagent.",
      auto_submit: {
        title: "Envío automático de entrada de voz",
        description:
          "Enviar automaticamente a entrada de voz despois dun período de silencio",
      },
      auto_speak: {
        title: "Falar respostas automaticamente",
        description: "Falar automaticamente as respostas da IA",
      },
      spellcheck: {
        title: "Habilitar corrector ortográfico",
        description:
          "Habilitar ou deshabilitar o corrector ortográfico no campo de entrada do chat",
      },
    },
    items: {
      theme: {
        title: "Tema",
        description:
          "Selecciona o teu tema de cor preferido para a aplicación.",
      },
      "show-scrollbar": {
        title: "Mostrar barra de desprazamento",
        description:
          "Habilitar ou deshabilitar a barra de desprazamento na xanela de chat.",
      },
      "support-email": {
        title: "Correo electrónico de soporte",
        description:
          "Establece o enderezo de correo electrónico de soporte ao que os usuarios poden acceder cando necesiten axuda.",
      },
      "app-name": {
        title: "Nome",
        description:
          "Establece un nome que se mostrará na páxina de inicio de sesión para todos os usuarios.",
      },
      "display-language": {
        title: "Idioma de visualización",
        description:
          "Selecciona o idioma preferido para renderizar a interface de usuario de Nexiagent, cando as traducións estean dispoñibles.",
      },
      logo: {
        title: "Logotipo da marca",
        description:
          "Sube o teu logotipo personalizado para mostralo en todas as páxinas.",
        add: "Engadir un logotipo personalizado",
        recommended: "Tamaño recomendado: 800 x 200",
        remove: "Eliminar",
        replace: "Substituír",
      },
      "browser-appearance": {
        title: "Aparencia do navegador",
        description:
          "Personaliza a aparencia da lapela e o título do navegador cando a aplicación está aberta.",
        tab: {
          title: "Título",
          description:
            "Establece un título de lapela personalizado cando a aplicación está aberta nun navegador.",
        },
        favicon: {
          title: "Favicon",
          description:
            "Usa un favicon personalizado para a lapela do navegador.",
        },
      },
      "sidebar-footer": {
        title: "Elementos do rodapé da barra lateral",
        description:
          "Personaliza os elementos do rodapé que se mostran na parte inferior da barra lateral.",
        icon: "Icona",
        link: "Ligazón",
      },
      "render-html": {
        title: "Renderizar HTML no chat",
        description:
          "Xerar respostas en HTML nas respostas do asistente.\nIsto pode resultar nunha maior calidade das respostas, pero tamén pode xerar posibles riscos de seguridade.",
      },
    },
  },
  api: {
    title: "Chaves de API",
    description:
      "As chaves de API permiten ao titular acceder e administrar programaticamente esta instancia de Nexiagent.",
    link: "Ler a documentación da API",
    generate: "Xerar nova chave de API",
    empty: "Non se atoparon chaves API",
    actions: "Accións",
    messages: {
      error: "Erro: {{error}}",
    },
    modal: {
      title: "Crear nova chave API",
      cancel: "Cancelar",
      close: "Pechar",
      create: "Crear chave API",
      helper:
        "Unha vez creada, a chave API pódese usar para acceder e configurar esta instancia de Nexiagent mediante programación.",
      name: {
        label: "Nome",
        placeholder: "Integración de produción",
        helper:
          "Opcional. Usa un nome descritivo para poder identificar esta chave máis adiante.",
      },
    },
    row: {
      copy: "Copiar chave API",
      copied: "Copiada",
      unnamed: "--",
      deleteConfirm:
        "¿Seguro que desexas desactivar esta chave API?\nDespois de facelo xa non se poderá usar.\n\nEsta acción é irreversible.",
    },
    table: {
      name: "Nome",
      key: "Chave de API",
      by: "Creado por",
      created: "Creado",
    },
  },
  llm: {
    title: "Preferencia de LLM",
    description:
      "Estas son as credenciais e a configuración do teu provedor preferido de chat e incrustación de LLM. É importante que estas chaves estean actualizadas e sexan correctas, de non ser así, Nexiagent non funcionará correctamente.",
    provider: "Provedor de LLM",
    providers: {
      azure_openai: {
        azure_service_endpoint: "Punto de conexión do servizo de Azure",
        api_key: "Chave de API",
        chat_deployment_name: "Nome da implementación do chat",
        chat_model_token_limit: "Límite de tokens do modelo de chat",
        model_type: "Tipo de modelo",
        default: "Predeterminado",
        reasoning: "Razoamento",
        model_type_tooltip:
          'Se a súa implementación utiliza un modelo de razoamento (o1, o1-mini, o3-mini, etc.), configure isto como "Razoamento". De non ser así, as súas solicitudes de chat poderían fallar.',
      },
    },
  },
  transcription: {
    title: "Preferencia do modelo de transcrición",
    description:
      "Estas son as credenciais e a configuración do teu provedor de modelo de transcrición preferido. É importante que estas chaves estean actualizadas e sexan correctas, de non ser así, os ficheiros multimedia e o audio non se transcribirán.",
    provider: "Provedor de transcrición",
    "warn-start":
      "O uso do modelo local de Whisper en máquinas con RAM ou CPU limitadas pode deter Nexiagent ao procesar ficheiros multimedia.",
    "warn-recommend":
      "Recomendamos polo menos 2 GB de RAM e subir ficheiros de menos de 10 MB.",
    "warn-end":
      "O modelo integrado descargarase automaticamente no primeiro uso.",
  },
  embedding: {
    title: "Preferencia de incrustación",
    "desc-start":
      "Cando se utiliza un LLM que non admite de forma nativa un motor de incrustación, é posible que debas especificar credenciais adicionais para a incrustación de texto.",
    "desc-end":
      "A incrustación é o proceso de converter texto en vectores. Estas credenciais son necesarias para converter os teus ficheiros e prompts nun formato que Nexiagent poida usar para procesar.",
    provider: {
      title: "Provedor de incrustación",
    },
  },
  text: {
    title: "Preferencias de división de texto e fragmentación",
    "desc-start":
      "Ás veces, é posible que desexes cambiar a forma predeterminada en que se dividen e fragmentan os novos documentos antes de inserilos na túa base de datos vectorial.",
    "desc-end":
      "Só debes modificar esta configuración se comprendes como funciona a división de texto e os seus efectos secundarios.",
    size: {
      title: "Tamaño do fragmento de texto",
      description:
        "Esta é a lonxitude máxima de caracteres que pode estar presente nun só vector.",
      recommend: "A lonxitude máxima do modelo de incrustación é",
    },
    overlap: {
      title: "Superposición de fragmentos de texto",
      description:
        "Esta é a superposición máxima de caracteres que se produce durante a fragmentación entre dous fragmentos de texto adxacentes.",
    },
  },
  vector: {
    title: "Base de datos vectorial",
    description:
      "Estas son as credenciais e a configuración de como funcionará a túa instancia de Nexiagent. É importante que estas chaves estean actualizadas e sexan correctas.",
    provider: {
      title: "Provedor de base de datos vectorial",
      description: "Non se necesita configuración para LanceDB.",
    },
  },
  embeddable: {
    title: "Widgets de chat incrustables",
    description:
      "Os widgets de chat incrustables son interfaces de chat de cara ao público que están vinculadas a un único espazo de traballo. Estes permíteche crear espazos de traballo que logo podes publicar para todo o mundo.",
    create: "Crear incrustación",
    table: {
      workspace: "Espazo de traballo",
      chats: "Chats enviados",
      active: "Dominios activos",
      created: "Creado",
    },
  },
  "embed-chats": {
    title: "Historial de chat incrustado",
    export: "Exportar",
    description:
      "Estes son todos os chats e mensaxes gravadas de calquera incrustación que publicaches.",
    table: {
      embed: "Incrustación",
      sender: "Remitente",
      message: "Mensaxe",
      response: "Resposta",
      at: "Enviado o",
    },
    delete: "Eliminar",
    "delete-all": "Eliminar todos",
    "delete-all-confirm": "Seguro que queres eliminar todos os chats? Esta acción é irreversible.",
  },
  event: {
    title: "Rexistros de eventos",
    description:
      "Ve todas as accións e eventos que ocorren nesta instancia para a súa supervisión.",
    clear: "Borrar rexistros de eventos",
    table: {
      type: "Tipo de evento",
      user: "Usuario",
      occurred: "Ocorrido o",
    },
  },
  privacy: {
    title: "Privacidade e manexo de datos",
    description:
      "Esta é a túa configuración sobre como os provedores de terceiros conectados e Nexiagent manexan os teus datos.",
    anonymous: "Telemetría anónima habilitada",
  },
  connectors: {
    "search-placeholder": "Buscar conectores de datos",
    "no-connectors": "Non se atoparon conectores de datos.",
    obsidian: {
      vault_location: "Localización do vault",
      vault_description:
        "Selecciona o cartafol do teu vault de Obsidian para importar todas as notas e as súas conexións.",
      selected_files: "Atopáronse {{count}} ficheiros markdown",
      importing: "Importando vault...",
      import_vault: "Importar vault",
      processing_time:
        "Isto pode levar un tempo dependendo do tamaño do teu vault.",
      vault_warning:
        "Para evitar conflitos, asegúrate de que o teu vault de Obsidian non estea aberto actualmente.",
    },
    github: {
      name: "Repositorio de GitHub",
      description:
        "Importa un repositorio completo de GitHub, público ou privado, cun só clic.",
      URL: "URL do repositorio de GitHub",
      URL_explained: "URL do repositorio de GitHub que desexas recopilar.",
      token: "Token de acceso de GitHub",
      optional: "opcional",
      token_explained:
        "Token de acceso para evitar a limitación de velocidade.",
      token_explained_start: "Sen un ",
      token_explained_link1: "Token de acceso persoal",
      token_explained_middle:
        ", a API de GitHub pode limitar o número de ficheiros que se poden recopilar debido aos límites de velocidade. Podes ",
      token_explained_link2: "crear un token de acceso temporal",
      token_explained_end: " para evitar este problema.",
      ignores: "Ficheiros ignorados",
      git_ignore:
        "Lista en formato .gitignore para ignorar ficheiros específicos durante a recompilación. Preme Intro despois de cada entrada que queiras gardar.",
      task_explained:
        "Unha vez completado, todos os ficheiros estarán dispoñibles para incrustar nos espazos de traballo no selector de documentos.",
      branch: "Rama da que desexas recopilar ficheiros.",
      branch_loading: "-- cargando ramas dispoñibles --",
      branch_explained: "Rama da que desexas recopilar ficheiros.",
      token_information:
        "Sen completar o <b>Token de acceso de GitHub</b>, este conector de datos só poderá recopilar os ficheiros de <b>nivel superior</b> do repositorio debido aos límites de velocidade da API pública de GitHub.",
      token_personal:
        "Obtén un token de acceso persoal gratuíto cunha conta de GitHub aquí.",
    },
    gitlab: {
      name: "Repositorio de GitLab",
      description:
        "Importa un repositorio completo de GitLab, público ou privado, cun só clic.",
      URL: "URL do repositorio de GitLab",
      URL_explained: "URL do repositorio de GitLab que desexas recopilar.",
      token: "Token de acceso de GitLab",
      optional: "opcional",
      token_description:
        "Selecciona entidades adicionais para obter da API de GitLab.",
      token_explained_start: "Sen un ",
      token_explained_link1: "Token de acceso persoal",
      token_explained_middle:
        ", a API de GitLab pode limitar o número de ficheiros que se poden recopilar debido aos límites de velocidade. Podes ",
      token_explained_link2: "crear un token de acceso temporal",
      token_explained_end: " para evitar este problema.",
      fetch_issues: "Obter issues como documentos",
      ignores: "Ficheiros ignorados",
      git_ignore:
        "Lista en formato .gitignore para ignorar ficheiros específicos durante a recompilación. Preme Intro despois de cada entrada que queiras gardar.",
      task_explained:
        "Unha vez completado, todos os ficheiros estarán dispoñibles para incrustar nos espazos de traballo no selector de documentos.",
      branch: "Rama da que desexas recopilar ficheiros",
      branch_loading: "-- cargando ramas dispoñibles --",
      branch_explained: "Rama da que desexas recopilar ficheiros.",
      token_information:
        "Sen completar o <b>Token de acceso de GitLab</b>, este conector de datos só poderá recopilar os ficheiros de <b>nivel superior</b> do repositorio debido aos límites de velocidade da API pública de GitLab.",
      token_personal:
        "Obtén un token de acceso persoal gratuíto cunha conta de GitLab aquí.",
    },
    youtube: {
      name: "Transcrición de YouTube",
      description:
        "Importa a transcrición dun vídeo completo de YouTube desde unha ligazón.",
      URL: "URL do vídeo de YouTube",
      URL_explained_start:
        "Introduce a URL de calquera vídeo de YouTube para obter a súa transcrición. O vídeo debe ter ",
      URL_explained_link: "subtítulos",
      URL_explained_end: " dispoñibles.",
      task_explained:
        "Unha vez completada, a transcrición estará dispoñible para incrustar nos espazos de traballo no selector de documentos.",
    },
    "website-depth": {
      name: "Extractor de ligazóns en masa",
      description:
        "Extrae un sitio web e as súas sub-ligazóns ata unha certa profundidade.",
      URL: "URL do sitio web",
      URL_explained: "URL do sitio web que desexas extraer.",
      depth: "Profundidade de rastrexo",
      depth_explained:
        "Este é o número de ligazóns secundarias que o traballador debe seguir desde a URL de orixe.",
      max_pages: "Páxinas máximas",
      max_pages_explained: "Número máximo de ligazóns a extraer.",
      task_explained:
        "Unha vez completado, todo o contido extraído estará dispoñible para incrustar nos espazos de traballo no selector de documentos.",
    },
    confluence: {
      name: "Confluence",
      description:
        "Importa unha páxina completa de Confluence cun só clic.",
      deployment_type: "Tipo de implementación de Confluence",
      deployment_type_explained:
        "Determina se a túa instancia de Confluence está aloxada na nube de Atlassian ou é autohospedada.",
      base_url: "URL base de Confluence",
      base_url_explained: "Esta é a URL base do teu espazo de Confluence.",
      space_key: "Chave do espazo de Confluence",
      space_key_explained:
        "Esta é a chave dos espazos da túa instancia de Confluence que se utilizará. Xeralmente comeza con ~",
      username: "Nome de usuario de Confluence",
      username_explained: "O teu nome de usuario de Confluence",
      auth_type: "Tipo de autenticación de Confluence",
      auth_type_explained:
        "Selecciona o tipo de autenticación que desexas usar para acceder ás túas páxinas de Confluence.",
      auth_type_username: "Nome de usuario e token de acceso",
      auth_type_personal: "Token de acceso persoal",
      token: "Token de acceso de Confluence",
      token_explained_start:
        "Necesitas proporcionar un token de acceso para a autenticación. Podes xerar un token de acceso",
      token_explained_link: "aquí",
      token_desc: "Token de acceso para a autenticación",
      pat_token: "Token de acceso persoal de Confluence",
      pat_token_explained: "O teu token de acceso persoal de Confluence.",
      task_explained:
        "Unha vez completado, o contido da páxina estará dispoñible para incrustar nos espazos de traballo no selector de documentos.",
      bypass_ssl: "Omitir a validación do certificado SSL",
      bypass_ssl_explained:
        "Habilite esta opción para omitir a validación do certificado SSL para instancias de Confluence autohospedadas con certificados auto-firmados.",
    },
    manage: {
      documents: "Documentos",
      "data-connectors": "Conectores de datos",
      "desktop-only":
        "A edición desta configuración só está dispoñible nun dispositivo de escritorio. Accede a esta páxina no teu escritorio para continuar.",
      dismiss: "Descartar",
      editing: "Editando",
    },
    directory: {
      "my-documents": "Os meus documentos",
      "new-folder": "Nova carpeta",
      "search-document": "Buscar documento",
      "no-documents": "Sen documentos",
      "move-workspace": "Mover ao espazo de traballo",
      "delete-confirmation":
        "¿Estás seguro de que queres eliminar estes ficheiros e carpetas?\nIsto eliminará os ficheiros do sistema e eliminaraos de calquera espazo de traballo existente automaticamente.\nEsta acción non é reversible.",
      "removing-message":
        "Eliminando {{count}} documentos e {{folderCount}} carpetas. Por favor, agarda.",
      "move-success": "Moveronse {{count}} documentos con éxito.",
      no_docs: "Sen documentos",
      select_all: "Seleccionar todo",
      deselect_all: "Deseleccionar todo",
      remove_selected: "Eliminar seleccionados",
      save_embed: "Gardar e incrustar",
      cached: "En caché",
      name: "Nome",
      status: "Estado",
      "pin-to-workspace": "Fixar ao workspace",
      "unpin-from-workspace": "Desafixar do workspace",
      pinned: "Fixado",
      unpin: "Desafixar",
      "queued": "Queued",
      "embedding": "Procesando",
      "complete": "Completado",
      "failed": "Erro",
      "remove-from-workspace": "Quitar documento do workspace",
      "total-documents_one": "{{count}} documento",
      "total-documents_other": "{{count}} documentos",
    },
    upload: {
      "processor-offline": "Procesador de documentos non dispoñible",
      "processor-offline-desc":
        "Non podemos subir os teus ficheiros neste momento porque o procesador de documentos non está dispoñible. Por favor, téntao de novo máis tarde.",
      "click-upload": "Fai clic para subir ou arrastra e solta",
      "file-types":
        "¡admite ficheiros de texto, csv, follas de cálculo, ficheiros de audio e máis!",
      "or-submit-link": "ou envía unha ligazón",
      "placeholder-link": "https://exemplo.com",
      fetching: "Obtendo...",
      "fetch-website": "Obter sitio web",
      "privacy-notice":
        "Estes ficheiros subiranse ao procesador de documentos que se executa nesta instancia de Nexiagent. Estes ficheiros non se envían nin se comparten con terceiros.",
    },
    pinning: {
      what_pinning: "¿Que é fixar documentos?",
      pin_explained_block1:
        "Cando <b>fixas</b> un documento en Nexiagent, inxectaremos todo o contido do documento na túa xanela de prompt para que o teu LLM o comprenda por completo.",
      pin_explained_block2:
        "Isto funciona mellor con <b>modelos de gran contexto</b> ou ficheiros pequenos que son críticos para a súa base de coñecementos.",
      pin_explained_block3:
        "Se non obtes as respostas que desexas de Nexiagent por defecto, fixar é unha excelente maneira de obter respostas de maior calidade cun clic.",
      accept: "Ok, entendido",
    },
    watching: {
      what_watching: "¿Que fai observar un documento?",
      watch_explained_block1:
        "Cando <b>observas</b> un documento en Nexiagent, sincronizaremos <i>automaticamente</i> o contido do teu documento desde a súa fonte orixinal a intervalos regulares. Isto actualizará automaticamente o contido en cada espazo de traballo onde se xestione este ficheiro.",
      watch_explained_block2:
        "Esta función actualmente admite contido en liña e non estará dispoñible para documentos subidos manualmente.",
      watch_explained_block3_start:
        "Podes administrar que documentos se observan desde a vista de administrador do ",
      watch_explained_block3_link: "Administrador de ficheiros",
      watch_explained_block3_end: ".",
      accept: "Ok, entendido",
    },
  },
  chat_window: {
    attachments_processing:
      "Os ficheiros adxuntos están procesándose. Por favor, agarda...",
    send_message: "Enviar unha mensaxe",
    attach_file: "Adxuntar un ficheiro a este chat",
    text_size: "Cambiar tamaño do texto.",
    microphone: "Fala o teu prompt.",
    send: "Enviar mensaxe de prompt ao espazo de traballo",
    tts_speak_message: "Mensaxe de voz TTS",
    copy: "Copiar",
    regenerate: "Rexenerar",
    regenerate_response: "Rexenerar resposta",
    good_response: "Boa resposta",
    more_actions: "Máis accións",
    fork: "Bifurcar",
    delete: "Eliminar",
    cancel: "Cancelar",
    edit_prompt: "Editar prompt",
    edit_response: "Editar resposta",
    preset_reset_description:
      "Borra o teu historial de chat e comeza un novo chat",
    add_new_preset: " Engadir novo preaxuste",
    command: "Comando",
    your_command: "o-teu-comando",
    placeholder_prompt:
      "Este é o contido que se inxectará diante do teu prompt.",
    description: "Descrición",
    placeholder_description: "Responde cun poema sobre os LLMs.",
    save: "Gardar",
    small: "Pequeno",
    normal: "Normal",
    large: "Grande",
    workspace_llm_manager: {
      search: "Buscar provedores de LLM",
      loading_workspace_settings:
        "Cargando a configuración do espazo de traballo...",
      available_models: "Modelos dispoñibles para {{provider}}",
      available_models_description:
        "Selecciona un modelo para usar neste espazo de traballo.",
      save: "Usar este modelo",
      saving:
        "Establecendo o modelo como predeterminado do espazo de traballo...",
      missing_credentials: "¡A este provedor fáltanlle credenciais!",
      missing_credentials_description:
        "Fai clic para configurar as credenciais",
    },
    submit: "Enviar",
    edit_info_user:
      '"Enviar" rexenera a resposta da IA. "Gardar" actualiza só a túa mensaxe.',
    edit_info_assistant:
      "Os cambios que realice gardaranse directamente nesta resposta.",
    see_less: "Ver menos",
    see_more: "Ver máis",
    tools: "Ferramentas",
    text_size_label: "Tamaño do texto",
    select_model: "Seleccionar modelo",
    sources: "Fontes",
    document: "Documento",
    similarity_match: "coincidencia",
    source_count_one: "{{count}} de referencia",
    source_count_other: "{{count}} referencias",
    add_new: "Engadir novo",
    edit: "Editar",
    publish: "Publicar",
    stop_generating: "Deixar de xerar respostas",
    slash_commands: "Comandos abreviados",
    agent_skills: "Habilidades do axente",
    manage_agent_skills: "Xestionar as habilidades do axente.",
    agent_skills_disabled_in_session:
      "Non é posible modificar as habilidades durante unha sesión cun axente activo. Primeiro, utilice o comando `/exit` para finalizar a sesión.",
    start_agent_session: "Iniciar sesión como axente",
    use_agent_session_to_use_tools:
      "Pode utilizar as ferramentas dispoñibles no chat iniciando unha sesión cun axente utilizando o prefixo '@agent' ao principio da súa mensaxe.",
    agent_invocation: {
      model_wants_to_call: "O modelo quere chamar",
      approve: "Aprobar",
      reject: "Rexeitar",
      always_allow: "Permitir sempre {{skillName}}",
      tool_call_was_approved: "A solicitude de ferramentas foi aprobada.",
      tool_call_was_rejected: "A solicitude de ferramenta foi rexeitada.",
      clarifying_skip: "Deixa que o axente decida.",
      clarifying_submit: "Enviar",
      clarifying_skipped: "Deixa que o axente tome a decisión.",
      clarifying_timeout: "Non se recibiu a resposta a tempo.",
      clarifying_pagination: "{{current}} de {{total}}",
      clarifying_prev_aria: "Pregunta anterior",
      clarifying_next_aria: "Seguinte pregunta",
      clarifying_close_aria: "Pechar e saltar",
      clarifying_other: "Outros",
      clarifying_other_placeholder: "Escribe a túa resposta",
      batch_progress: "{{answered}} de {{total}} respondeu",
      batch_skip_this: "Saltar",
      batch_submit_all: "Enviar todo",
      batch_next: "Seguinte",
      answer_skipped: "[o usuario saltou a sección]",
    },
    custom_skills: "Habilidades personalizadas",
    agent_flows: "Fluxos de axentes",
    no_tools_found: "Non se atoparon ferramentas coincidentes.",
    loading_mcp_servers: "Cargando servidores de MCP...",
    app_integrations: "Integracións de aplicacións",
    sub_skills: "Habilidades específicas",
    memories: {
      title: "Lembranzas",
      empty:
        "Ata agora, non hai lembranzas rexistradas. Sen embargo, a medida que interactúes máis co chatbot, crearanse novas lembranzas.",
      empty_cta: "crear unha nova lembranza",
      tab_workspace: "Espazo de traballo",
      tab_global: "Global",
      toggle: {
        label: "Habilitar a personalización",
        description:
          "Permite que o seu asistente recorde datos sobre vostede ou sobre este entorno de traballo e os utilice nas conversas.",
      },
      auto_extraction: {
        label: "Lembranzas automáticas",
        description:
          "Deixe que o seu asistente cree lembranzas automaticamente en segundo plano.",
      },
      menu: {
        edit: "Editar",
        delete: "Eliminar",
        move_to_global: "Pasar a nivel global",
        move_to_workspace: "Ir á pantalla de traballo",
      },
      modal: {
        create_title: "Crear lembranzas",
        edit_title: "Editar lembranza",
        create_description:
          'As lembranzas deben ser unha declaración concisa e única. Por exemplo: "O usuario prefire Python a JavaScript".',
        edit_description: "Actualiza o contido desta lembranza.",
        label: "Lembranza",
        placeholder:
          "Por exemplo, o nome do usuario é Joe, o usuario traballa en Nexiagent, etc.",
        create: "Crear",
        save: "Gardar",
        cancel: "Cancelar",
      },
    },
    stt_unsupported:
      "O acceso ao micrófono non está soportado neste navegador.",
    stt_mic_denied:
      "Non se puido acceder ao micrófono. Por favor, conceda os permisos e vólvao intentar.",
    stt_transcription_failed: "Non se puido realizar a transcrición: {{error}}",
    export: "Exportar a conversa como...",
    exporting: "Exportando...",
  },
  profile_settings: {
    edit_account: "Editar conta",
    profile_picture: "Foto de perfil",
    remove_profile_picture: "Eliminar foto de perfil",
    username: "Nome de usuario",
    new_password: "Novo contrasinal",
    password_description: "O contrasinal debe ter polo menos 8 caracteres",
    cancel: "Cancelar",
    update_account: "Actualizar conta",
    theme: "Preferencia de tema",
    language: "Idioma preferido",
    failed_upload: "Erro ao subir a foto de perfil: {{error}}",
    upload_success: "Foto de perfil subida.",
    failed_remove: "Erro ao eliminar a foto de perfil: {{error}}",
    profile_updated: "Perfil actualizado.",
    failed_update_user: "Erro ao actualizar o usuario: {{error}}",
    account: "Conta",
    support: "Soporte",
    signout: "Pechar sesión",
  },
  "keyboard-shortcuts": {
    title: "Atallos de teclado",
    shortcuts: {
      settings: "Abrir configuración",
      workspaceSettings: "Abrir configuración do espazo de traballo actual",
      home: "Ir a Inicio",
      workspaces: "Administrar espazos de traballo",
      apiKeys: "Configuración de chaves de API",
      llmPreferences: "Preferencias de LLM",
      chatSettings: "Configuración do chat",
      help: "Mostrar axuda de atallos de teclado",
      showLLMSelector: "Mostrar selector de LLM do espazo de traballo",
    },
  },
  community_hub: {
    publish: {
      system_prompt: {
        success_title: "¡Éxito!",
        success_description:
          "¡O teu prompt do sistema foi publicado no Centro da Comunidade!",
        success_thank_you: "¡Grazas por compartir coa Comunidade!",
        view_on_hub: "Ver no Centro da Comunidade",
        modal_title: "Publicar prompt do sistema",
        name_label: "Nome",
        name_description:
          "Este é o nome para mostrar do teu prompt do sistema.",
        name_placeholder: "O meu prompt do sistema",
        description_label: "Descrición",
        description_description:
          "Esta é a descrición do teu prompt do sistema. Úsaa para describir o propósito do teu prompt do sistema.",
        tags_label: "Etiquetas",
        tags_description:
          "As etiquetas utilízanse para identificar o teu prompt do sistema para unha busca máis doada. Podes engadir varias etiquetas. Máximo 5 etiquetas. Máximo 20 caracteres por etiqueta.",
        tags_placeholder: "Escribe e preme Enter para engadir etiquetas",
        visibility_label: "Visibilidade",
        public_description:
          "Os prompts do sistema públicos son visibles para todos.",
        private_description:
          "Os prompts do sistema privados só son visibles para ti.",
        publish_button: "Publicar no Centro da Comunidade",
        submitting: "Publicando...",
        prompt_label: "Prompt",
        prompt_description:
          "Este é o prompt do sistema real que se utilizará para guiar ao LLM.",
        prompt_placeholder: "Introduce o teu prompt do sistema aquí...",
      },
      agent_flow: {
        success_title: "¡Éxito!",
        success_description:
          "¡O teu fluxo de axente foi publicado no Centro da Comunidade!",
        success_thank_you: "¡Grazas por compartir coa Comunidade!",
        view_on_hub: "Ver no Centro da Comunidade",
        modal_title: "Publicar fluxo de axente",
        name_label: "Nome",
        name_description:
          "Este é o nome para mostrar do teu fluxo de axente.",
        name_placeholder: "O meu fluxo de axente",
        description_label: "Descrición",
        description_description:
          "Esta é a descrición do teu fluxo de axente. Úsaa para describir o propósito do teu fluxo de axente.",
        tags_label: "Etiquetas",
        tags_description:
          "As etiquetas utilízanse para identificar o teu fluxo de axente para unha busca máis doada. Podes engadir varias etiquetas. Máximo 5 etiquetas. Máximo 20 caracteres por etiqueta.",
        tags_placeholder: "Escribe e preme Enter para engadir etiquetas",
        visibility_label: "Visibilidade",
        submitting: "Publicando...",
        submit: "Publicar no Centro da Comunidade",
        privacy_note:
          "Os fluxos de axente sempre se suben como privados para protexer calquera dato sensible. Podes cambiar a visibilidade no Centro da Comunidade despois de publicar. Por favor, verifica que o teu fluxo non conteña ningunha información sensible ou privada antes de publicar.",
      },
      slash_command: {
        success_title: "¡Éxito!",
        success_description:
          "¡O teu comando de barra foi publicado no Centro da Comunidade!",
        success_thank_you: "¡Grazas por compartir coa Comunidade!",
        view_on_hub: "Ver no Centro da Comunidade",
        modal_title: "Publicar comando de barra",
        name_label: "Nome",
        name_description:
          "Este é o nome para mostrar do teu comando de barra.",
        name_placeholder: "O meu comando de barra",
        description_label: "Descrición",
        description_description:
          "Esta é a descrición do teu comando de barra. Úsaa para describir o propósito do teu comando de barra.",
        tags_label: "Etiquetas",
        tags_description:
          "As etiquetas utilízanse para identificar o teu comando de barra para unha busca máis doada. Podes engadir varias etiquetas. Máximo 5 etiquetas. Máximo 20 caracteres por etiqueta.",
        tags_placeholder: "Escribe e preme Enter para engadir etiquetas",
        visibility_label: "Visibilidade",
        public_description:
          "Os comandos de barra públicos son visibles para todos.",
        private_description:
          "Os comandos de barra privados só son visibles para ti.",
        publish_button: "Publicar no Centro da Comunidade",
        submitting: "Publicando...",
        prompt_label: "Prompt",
        prompt_description:
          "Este é o prompt que se utilizará cando se active o comando de barra.",
        prompt_placeholder: "Introduce o teu prompt aquí...",
      },
      generic: {
        unauthenticated: {
          title: "Requírese autenticación",
          description:
            "Necesitas autenticarte co Centro da Comunidade de Nexiagent antes de publicar elementos.",
          button: "Conectar ao Centro da Comunidade",
        },
      },
    },
  },
  security: {
    title: "Seguridade",
    multiuser: {
      title: "Modo multiusuario",
      description:
        "Configura a túa instancia para que sexa compatible co teu equipo activando o modo multiusuario.",
      enable: {
        "is-enable": "O modo multiusuario está habilitado",
        enable: "Habilitar modo multiusuario",
        description:
          "Por defecto, serás o único administrador. Como administrador, deberás crear contas para todos os novos usuarios ou administradores. Non perdas o teu contrasinal, xa que só un usuario administrador pode restablecer os contrasinais.",
        username: "Nome de usuario da conta de administrador",
        password: "Contrasinal da conta de administrador",
      },
    },
    password: {
      title: "Protección con contrasinal",
      description:
        "Protexe a túa instancia de Nexiagent cun contrasinal. Se o esqueces, non hai método de recuperación, así que asegúrate de gardar este contrasinal.",
      "password-label": "Contrasinal da instancia",
    },
  },
  home: {
    welcome: "Benvido",
    chooseWorkspace: "Escolle un espazo de traballo para comezar a chatear!",
    notAssigned:
      "Actualmente non estás asignado a ningún espazo de traballo.\nPor favor, contacta co teu administrador para solicitar acceso a un espazo de traballo.",
    goToWorkspace: 'Ir a "{{workspace}}"',
  },
  telegram: {
    title: "Bot de Telegram",
    description:
      "Conecte a súa instancia de Nexiagent a Telegram para poder conversar cos seus espazos de traballo desde calquera dispositivo.",
    setup: {
      step1: {
        title: "Paso 1: Crea o teu bot de Telegram.",
        description:
          "Abra o bot @BotFather en Telegram, envíe /newbot ao chat con <code>@BotFather, siga as instrucións e copie o token da API.",
        "open-botfather": "Iniciar BotFather",
        "instruction-1": "1. Abra a ligazón ou escanee o código QR.",
        "instruction-2":
          "2. Enviar <code>/newbot</code> a <code>@BotFather</code>",
        "instruction-3":
          "3. Escolla un nome e un nome de usuario para o seu bot.",
        "instruction-4": "4. Copie o token da API que reciba.",
      },
      step2: {
        title: "Paso 2: Conecte o seu bot.",
        description:
          "Copia o token de API que recibiches de @BotFather e selecciona un espazo de traballo predeterminado para que o teu bot poida comunicarse.",
        "bot-token": "Token de Bot",
        connecting: "Conectando...",
        "connect-bot": "Bot de conexión",
      },
      security: {
        title: "Configuracións de seguridade recomendadas",
        description:
          "Para unha maior seguridade, configure estas opcións a través de @BotFather.",
        "disable-groups": "— Evitar que se engadan bots aos grupos",
        "disable-inline":
          "— Evitar que os bots se utilicen en buscas dentro da páxina.",
        "obscure-username":
          "Utiliza un nome de usuario para o bot que non sexa obvio para reducir a súa visibilidade.",
      },
      "toast-enter-token": "Por favor, introduza un token de bot.",
      "toast-connect-failed": "Non se puido establecer a conexión co bot.",
    },
    connected: {
      status: "Conectado",
      "status-disconnected":
        "Desconectado — o token pode estar caducado ou ser inválido.",
      "placeholder-token": "Pegar novo token de bot...",
      reconnect: "Restablecer a conexión",
      workspace: "Espazo de traballo",
      "bot-link": "Ligazón a bot",
      "voice-response": "Resposta por voz",
      disconnecting: "Desconectando...",
      disconnect: "Desconectar",
      "voice-text-only": "Só texto",
      "voice-mirror":
        "Espello (responder con voz cando o usuario envía unha gravación de voz)",
      "voice-always":
        "Incluír sempre unha gravación de voz (enviar audio con cada resposta).",
      "toast-disconnect-failed": "Non se puido desconectar o robot.",
      "toast-reconnect-failed":
        "Non se puido restablecer a conexión co bot.",
      "toast-voice-failed": "Non se puido actualizar o modo de voz.",
      "toast-approve-failed": "Non se puido aprobar o usuario.",
      "toast-deny-failed": "Non se puido denegar a solicitude do usuario.",
      "toast-revoke-failed": "Non se puido revogar o acceso do usuario.",
    },
    users: {
      "pending-description":
        "Usuarios que están agardando a verificación. Compara o código de emparellamento que se mostra aquí co que aparece na súa conversa de Telegram.",
      unknown: "Descoñecido",
    },
  },
  scheduledJobs: {
    title: "Tarefas programadas",
    enableNotifications:
      "Activar as notificacións do navegador para os resultados de busca de emprego.",
    description:
      "Cree tarefas de IA recorrentes que se executen segundo un horario. Cada tarefa executa unha instrución con ferramentas opcionais e garda o resultado para a súa revisión.",
    newJob: "Novo traballo",
    loading: "Cargando...",
    emptyTitle: "Aínda non hai tarefas programadas.",
    emptySubtitle: "Cree unha para comezar.",
    table: {
      name: "Nome",
      schedule: "Horario",
      status: "Estado",
      lastRun: "Última execución",
      nextRun: "Próxima execución",
      actions: "Accións",
    },
    confirmDelete: "¿Está seguro de que desexa eliminar esta tarefa programada?",
    toast: {
      deleted: "Traballo eliminado",
      triggered: "A tarefa completouse con éxito.",
      triggerFailed: "Non se puido iniciar a tarefa.",
      triggerSkipped: "Xa se iniciou o traballo.",
      killed: "A tarefa completouse con éxito.",
      killFailed: "Non logrou deter o traballo.",
    },
    row: {
      neverRun: "Nunca executado",
      viewRuns: "Execución de probas",
      runNow: "¡Executar agora!",
      enable: "Habilitar",
      disable: "Desactivar",
      edit: "Editar",
      delete: "Eliminar",
    },
    modal: {
      titleEdit: "Modificar tarefa programada",
      titleNew: "Nova tarefa programada",
      nameLabel: "Nome",
      namePlaceholder: "p. ex., Resumo diario de noticias",
      promptLabel: "Solicitude",
      promptPlaceholder: "A instrución para executar en cada execución...",
      scheduleLabel: "Horario",
      modeBuilder: "Constructor",
      modeCustom: "Personalizado",
      cronPlaceholder: "Expresión de cron (por exemplo, 0 9 * * *)",
      currentSchedule: "Horario actual:",
      toolsLabel: "Ferramentas (opcional)",
      toolsDescription:
        "Seleccione as ferramentas dispoñibles para esta tarefa. Se ningunha ferramenta está seleccionada, a tarefa executarase sen utilizar ningunha ferramenta.",
      toolsSearch: "Buscar",
      toolsNoResults: "Non se atoparon ferramentas que coincidan.",
      required: "Requirido",
      requiredFieldsBanner:
        "Por favor, complete todos os campos obrigatorios para crear o anuncio de emprego.",
      cancel: "Cancelar",
      saving: "Gardando...",
      updateJob: "Actualizar posto de traballo",
      createJob: "Crear emprego",
      jobUpdated: "Posto actualizado",
      jobCreated: "Posto creado",
    },
    builder: {
      fallbackWarning:
        'Esta expresión non se pode modificar visualmente. Cambie a "Personalizado" para mantela, ou modifique calquera cousa debaixo para substituíla.',
      run: "Executar",
      frequency: {
        minute: "cada minuto",
        hour: "por hora",
        day: "diario",
        week: "semanal",
        month: "mensual",
      },
      every: "Cada",
      minuteOne: "1 minuto",
      minuteOther: "{{count}} minutos",
      atMinute: "No minuto",
      pastEveryHour: "cada hora",
      at: "A partir de",
      on: "En",
      onDay: "Nun día",
      ofEveryMonth: "de cada mes",
      weekdays: {
        sun: "Dom",
        mon: "Lun",
        tue: "Mar",
        wed: "Mér",
        thu: "Xov",
        fri: "Ven",
        sat: "Sáb",
      },
    },
    runHistory: {
      back: "Volver ás ofertas de emprego",
      title: "Historial de execucións: {{name}}",
      schedule: "Horario:",
      emptyTitle: "Aínda non hai candidatos para este posto.",
      emptySubtitle: "Execute a tarefa agora e vexa os resultados.",
      runNow: "¡Executar agora!",
      table: {
        status: "Estado",
        started: "Comezou",
        duration: "Duración",
        error: "Erro",
      },
      stopJob: "Suspender o emprego",
    },
    runDetail: {
      loading: "Cargando detalles da execución...",
      notFound: "Non se atopou a execución.",
      back: "Volver",
      unknownJob: "Posto sen especificar",
      runHeading: "{{name}} — Executar a proba #{{id}}",
      duration: "Duración: {{value}}",
      creating: "Creando...",
      threadFailed: "Non se puido crear o fío.",
      sections: {
        prompt: "Indicación",
        error: "Erro",
        thinking: "Ideas ({{count}})",
        toolCalls: "Chamadas a ferramentas ({{count}})",
        files: "Ficheiros ({{count}})",
        response: "Resposta",
        metrics: "Indicadores",
      },
      metrics: {
        promptTokens: "Tokens do prompt:",
        completionTokens: "Tokens de finalización:",
      },
      stopJob: "Suspender o emprego",
      killing: "Detendo...",
      continueInThread: "Continuar no chat",
    },
    toolCall: {
      arguments: "Argumentos:",
      showResult: "Mostrar resultado",
      hideResult: "Ocultar resultado",
    },
    file: {
      unknown: "Ficheiro descoñecido",
      download: "Descargar",
      downloadFailed: "Non se puido descargar o ficheiro.",
      types: {
        powerpoint: "Presentación de diapositivas",
        pdf: "Documento en formato PDF",
        word: "Documento de Word",
        spreadsheet: "Folla de cálculo",
        generic: "Ficheiro",
      },
    },
    status: {
      completed: "Completado",
      failed: "Fallido",
      timed_out: "Tempo esgotado",
      running: "Executando",
      queued: "En cola",
    },
  },
  "model-router": {
    title: "Enrutadores de modelo",
    description:
      "Os enrutadores de modelos permítenche definir regras para dirixir automaticamente as mensaxes de chat a diferentes provedores e modelos de LLM, segundo as condicións.",
    table: {
      name: "Nome",
      fallback: "Opción alternativa",
      rules: "Regras",
      workspaces: "Espazos de traballo",
    },
    "no-routers": "Aínda non existen modelos de routers.",
    "empty-description":
      "Ningún enrutador foi configurado aínda. Cree un para comezar.",
    "new-router-button": "Novo router",
    "delete-confirm":
      '¿Está seguro de que desexa eliminar o enrutador "{{name}}"?\nIsto eliminará todas as súas regras e desconectará calquera espazo de traballo que o utilice.\n\nEsta acción é irreversible.',
    "toast-deleted": "Enrutador eliminado",
    "toast-delete-failed": "Non se puido eliminar o router: {{error}}",
    "new-router": {
      title: "Crear un novo router",
      name: "Nome",
      "name-placeholder": "p. ex., Optimizador de custos",
      description: "Descrición",
      "description-placeholder": "Descrición opcional",
      "fallback-label": "Provedor principal e modelo",
      "fallback-description":
        "Utilízase cando non se atopa ningunha regra de enrutamento que coincida. Tamén se utiliza para avaliar as regras clasificadas por modelos de linguaxe.",
      "cooldown-label": "Tempo de arrefriamento (segundos)",
      "cooldown-help":
        "Durante canto tempo se garda a decisión de enrutamento antes de volver a avaliar as regras. Establecer en 0 para desactivar o almacenamento na caché.",
      "name-required": "Requírese o nome.",
      "fallback-required": "Requírese o provedor principal e o modelo.",
      cancel: "Cancelar",
      create: "Crear enrutador",
    },
    "edit-router": {
      "back-to-routers": "Volver aos enrutadores de modelo",
      title: "Editar enrutador: {{name}}",
      save: "Gardar cambios",
      "toast-update-failed": "Non se puido actualizar o router.",
    },
    rules: {
      title: "Regras de enrutamento",
      "title-with-name": "Regras do enrutador: {{name}}",
      description:
        "Defina as regras que determinan cando e como se envían as mensaxes de chat a provedores e modelos específicos.",
      "add-rule": "Engadir regra",
      "delete-confirm": 'Eliminar a regra "{{title}}"?',
      "toast-delete-failed": "Non se puido eliminar a regra.",
      "toast-reorder-failed": "Non se puideron aplicar as regras.",
      "no-rules": "Aínda non hai regras.",
      "empty-description":
        "Engade unha regra para dirixir específicamente as mensaxes de chat a certos provedores e modelos.",
      "new-rule-button": "Nova regra",
      "calculated-section-label":
        "Regras calculadas — avaliadas en primeiro lugar, seguindo unha orde de prioridade.",
      "llm-section-label":
        "Regras de LLM: avaliadas por lotes se ningunha regra calculada coincide.",
      "llm-rule-body":
        'Coincide con "<desc>"{{description}}"</desc>" e logo redirixe a <route>{{route}}</route>',
      "calculated-no-conditions":
        "Sen condicións — ruta a <route>{{route}}</route>",
      "calculated-single-condition":
        'Se [<prop>] [{{property}}] [</prop>] [{{comparator}}] [<val>] "[{{value}}]" [</val>], entón dirixir a [<route>] [{{route}}] [</route>].',
      "calculated-multi-condition":
        "Se {{quantifier}} de <cond>{{conditions}}</cond> entón, dirixir a <route>{{route}}</route>",
      "comparator-contains": "contén",
      "comparator-matches": "coincide",
      "comparator-between": "entre",
      "badge-llm": "Modelo de linguaxe grande (LLM)",
      "badge-calculated": "Calculado",
      "aria-drag-to-reorder": "Arrastra para reordenar",
      "aria-edit-rule": "Regra de edición",
      "aria-delete-rule": "Eliminar regra",
      "quantifier-any": "CALQUERA",
      "quantifier-all": "TODO",
    },
    "rule-form": {
      "title-label": "Título",
      "rule-type": "Tipo de regra",
      "property-label": "Propiedade",
      "property-select": "Seleccionar",
      "comparator-label": "Comparador",
      "comparator-select": "Seleccionar",
      "value-label": "Valor",
      "add-condition": "Engadir condición",
      "remove-condition": "Eliminar a condición",
      "conditions-incomplete":
        "A condición {{index}} está incompleta: complete coa propiedade, o comparador e o valor.",
      "match-description-label": "Descrición da coincidencia",
      "match-description-placeholder":
        "Por exemplo, o usuario está preguntando sobre temas legais, contratos ou cumprimento normativo.",
      "match-description-help":
        "Describa a situación na que desexa que esta regra se aplique. O seu modelo de linguaxe avaliará esta descrición para determinar se debe utilizarse.",
      "route-to-label": "Ruta cara ao provedor e modelo",
      "route-to-description":
        "Cando esta regra se cumpre, utilice este provedor/modelo.",
      cancel: "Cancelar",
      saving: "Gardando...",
      "update-rule": "Regra de actualización",
      "create-rule": "Crear regra",
      "title-required": "O título é obrigatorio.",
      "toast-save-failed": "Non se puido gardar a regra.",
      "type-calculated-label": "Calculado",
      "type-calculated-description":
        "Coincide en función das propiedades da mensaxe, como o contido, o número de tokens ou a hora do día.",
      "type-llm-label": "Clasificación de LLM",
      "type-llm-description":
        "Utilice un modelo de linguaxe para clasificar a mensaxe segundo unha descrición que vostede proporcione.",
      "prop-prompt-content": "Contido solicitado",
      "prop-token-count": "Número de tokens na conversa",
      "prop-message-count": "Número de mensaxes de conversa",
      "prop-current-hour": "Hora actual (0-23)",
      "prop-has-image": "¿Ten adxunto unha imaxe?",
      "cmp-contains": "contén",
      "cmp-matches-regex": "coincidencias (expresións regulares)",
      "cmp-equals": "igual a",
      "cmp-not-equals": "non é igual a",
      "cmp-greater-than": "maior que",
      "cmp-greater-than-or-equal": "maior ou igual que",
      "cmp-less-than": "menor que",
      "cmp-less-than-or-equal": "menor ou igual que",
      "cmp-between": "entre (incluíndo)",
      "placeholder-between-hour": "p.ex., 9:17 (de 9:00 a 17:00)",
      "placeholder-between-numeric": "p. ex. 10,50",
      "placeholder-hour": "p.ex. 18 (0-23)",
      "placeholder-message-count": "p. ex. 10",
      "placeholder-numeric": "p.ex. 4000",
      "placeholder-contains": "p. ex., código, Python, Rust",
      "placeholder-matches": "p. ex. /\\bpython\\b/i",
      "placeholder-default": "p. ex., código",
      "help-contains":
        "Lista separada por comas — coincide se a consulta contén algún dos valores (sen distinguir maiúsculas e minúsculas).",
      "help-matches":
        "Patrón de expresión regular. Utilice `/patrón/flags` para habilitar ou deshabilitar a sensibilidade a maiúsculas e minúsculas (por defecto, a sensibilidade a maiúsculas e minúsculas está desactivada).",
      "bool-true": "Verdadeiro",
      "bool-false": "Falso",
    },
    "provider-picker": {
      "select-provider": "Seleccionar provedor",
      "setup-required": "(require configuración)",
      "loading-models": "Cargando modelos...",
      "select-model": "Seleccionar modelo",
      "enter-model": "Introduza o nome do modelo",
      "select-provider-first": "Primeiro, escolla un provedor.",
      "configure-to-continue": "Configure {{name}} para continuar",
      "configure-provider": "Configurar {{name}}",
      "setup-credentials":
        "Introduza as credenciais necesarias para utilizar {{name}} como destino de enrutamento.",
      cancel: "Cancelar",
      "save-settings": "Gardar axustes",
      "toast-save-failed": "Non se puido gardar a configuración: {{error}}",
    },
    "router-selection": {
      "loading-routers": "Cargando enrutadores personalizados...",
      "no-routers-prefix-settings":
        "Ningún enrutador foi configurado todavía.",
      "no-routers-prefix-workspace": "Non se configuraron enrutadores.",
      "no-routers-link": "Cree un na configuración do enrutador.",
      "model-router-label": "Router de exemplo",
      "select-router": "Seleccione un enrutador.",
      "select-description":
        "Seleccione o enrutador que desexa utilizar para este espazo de traballo.",
      "no-routers-chat":
        "Non hai enrutadores configurados. Cree un na sección Configuración > Provedores de IA > Enrutador de Modelo.",
      "rule-count": "({{count}} regras)",
    },
    metrics: {
      "model-router-default": "Router de modelo",
    },
    chat: {
      "select-router-error": "Seleccione un router",
      "invalid-model": "Selección de modelo non válida",
      "routed-to": "Dirixido a <route>{{model}}</route>",
      "routed-to-rule":
        "Enviado a <route>{{model}}</route> a través de <rule>{{ruleTitle}}</rule>",
    },
  },
  sidebar: {
    "new-thread": "Novo fío",
    "starting-thread": "Iniciando fío...",
  },
};

export default TRANSLATIONS;
