import { ModelProviderCard } from '@/types/llm';

// ref: https://platform.openai.com/docs/deprecations
const OAICompatible: ModelProviderCard = {
    chatModels: [
        {
            contextWindowTokens: 128_000,
            description:
                'o1-mini是一款针对编程、数学和科学应用场景而设计的快速、经济高效的推理模型。该模型具有128K上下文和2023年10月的知识截止日期。',
            displayName: 'OpenAI o1-mini',
            enabled: true,
            id: 'o1-mini',
            maxOutput: 65_536,
            pricing: {
                input: 3,
                output: 12,
            },
            releasedAt: '2024-09-12',
        },
        {
            contextWindowTokens: 128_000,
            description:
                'o1是OpenAI新的推理模型，适用于需要广泛通用知识的复杂任务。该模型具有128K上下文和2023年10月的知识截止日期。',
            displayName: 'OpenAI o1-preview',
            enabled: true,
            id: 'o1-preview',
            maxOutput: 32_768,
            pricing: {
                input: 15,
                output: 60,
            },
            releasedAt: '2024-09-12',
        },
        {
            contextWindowTokens: 128_000,
            description:
                'GPT-4o mini是OpenAI在GPT-4 Omni之后推出的最新模型，支持图文输入并输出文本。作为他们最先进的小型模型，它比其他近期的前沿模型便宜很多，并且比GPT-3.5 Turbo便宜超过60%。它保持了最先进的智能，同时具有显著的性价比。GPT-4o mini在MMLU测试中获得了 82% 的得分，目前在聊天偏好上排名高于 GPT-4。',
            displayName: 'GPT-4o mini',
            enabled: true,
            functionCall: true,
            id: 'gpt-4o-mini',
            maxOutput: 16_385,
            pricing: {
                input: 0.15,
                output: 0.6,
            },
            vision: true,
        },
        {
            contextWindowTokens: 128_000,
            description:
                'ChatGPT-4o 是一款动态模型，实时更新以保持当前最新版本。它结合了强大的语言理解与生成能力，适合于大规模应用场景，包括客户服务、教育和技术支持。',
            displayName: 'GPT-4o',
            enabled: true,
            functionCall: true,
            id: 'gpt-4o',
            pricing: {
                input: 2.5,
                output: 10,
            },
            vision: true,
        },
        {
            contextWindowTokens: 128_000,
            description:
                'ChatGPT-4o 是一款动态模型，实时更新以保持当前最新版本。它结合了强大的语言理解与生成能力，适合于大规模应用场景，包括客户服务、教育和技术支持。',
            displayName: 'ChatGPT-4o',
            enabled: true,
            id: 'chatgpt-4o-latest',
            pricing: {
                input: 5,
                output: 15,
            },
            vision: true,
        },
        {
            contextWindowTokens: 4000,
            description:
                'Gemini 1.5 Flash 是Google最新的多模态AI模型，具备快速处理能力，支持文本、图像和视频输入，适用于多种任务的高效扩展。',
            displayName: 'Gemini 1.5 Flash (Web)',
            enabled: true,
            functionCall: true,
            id: 'gemini-1.5-flash-online',
            vision: true,
        },
    ],
    defaultShowBrowserRequest: true,
    id: 'oaicompatible',
    modelList: { showModelFetcher: true },
    modelsUrl: 'https://platform.openai.com/docs/models',
    name: 'OpenAI Compatible',
    proxyUrl: {
        placeholder: 'http://127.0.0.1:1234/v1',
    },
    smoothing: {
        speed: 4,
        text: true,
    },
    url: 'https://openai.com',
};

export default OAICompatible