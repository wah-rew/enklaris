export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  date: string;
  readTime: number;
  featured?: boolean;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "telemarketing-after-the-pdp-law-call-only-people-who-agreed",
    title: "Telemarketing After the PDP Law: Call Only the People Who Agreed",
    excerpt:
      "Indonesia's Personal Data Protection Law changes how companies may contact prospects. A consent-based model keeps telemarketing teams productive without adding legal risk.",
    category: "Lead Generation",
    date: "2026-11-15",
    readTime: 4,
    featured: true,
    content: `<p>For years telemarketing followed the same pattern: buy a list of numbers, call them one by one, and hope a small share will listen. That pattern is getting harder to defend, on cost and on legal grounds.</p>

<h2>What the PDP Law changes</h2>

<p>Law No. 27 of 2022 on Personal Data Protection requires a lawful basis for processing personal data, and one of the main bases is the explicit consent of the data subject. Violations can lead to administrative sanctions, including a fine of up to 2 percent of annual revenue.</p>

<p>For companies that rely on third-party lists, the question is simple: did every person on that list ever agree to be contacted about this offer?</p>

<h2>The consent-based model</h2>

<p>In a consent-based model the order is reversed. Consent is requested first, and only then does an agent call.</p>

<ul>
  <li><strong>Curate</strong>: profiles that fit the target are filtered before any message is sent.</li>
  <li><strong>Offer</strong>: the offer goes out through a verified WhatsApp business account. Recipients choose for themselves by tapping to say they are interested.</li>
  <li><strong>Hand over</strong>: only numbers that gave consent are passed to the telemarketing team.</li>
</ul>

<h2>What it means for the team</h2>

<p>Agents stop spending their day on dead numbers and rejections. Every call goes to someone who is expecting an explanation. Consent is recorded digitally, so there is a trail to show during an audit.</p>

<p>The safest way to start is a small pilot with a limited database, comparing the cost per new customer with the old method before increasing volume.</p>

<p><em>This article is not legal advice. Discuss how the PDP Law applies to your company with your legal counsel.</em></p>`,
  },
  {
    slug: "ai-agents-connected-to-your-crm-from-conversation-to-lead",
    title: "AI Agents Connected to Your CRM: From Conversation to Lead",
    excerpt:
      "A chatbot that only answers questions stops at the conversation. An AI agent connected to the CRM records who asked, what they need, and what happens next.",
    category: "AI Agent",
    date: "2026-11-15",
    readTime: 4,
    content: `<p>Many companies already run a chatbot on their website or WhatsApp. The problem is that conversations often just end: the visitor gets an answer and leaves, and the sales team never learns that anyone asked.</p>

<h2>What changes when the agent is connected to the CRM</h2>

<p>An AI agent connected to the CRM does two things at once. It answers the visitor using your business knowledge, and it fills in the lead record at the same time: source, interest, contact details and the promised follow-up.</p>

<ul>
  <li><strong>No lead is lost</strong>: every conversation that shows interest is recorded automatically.</li>
  <li><strong>Context travels with the lead</strong>: when sales calls, they already know what was asked.</li>
  <li><strong>One source of data</strong>: the contact form, WhatsApp and the website agent all write to the same place.</li>
</ul>

<h2>What to prepare</h2>

<p>Three things decide whether an implementation works: tidy knowledge to train the agent on, a clear definition of when a conversation counts as a lead, and rules for when the agent hands the conversation to a person.</p>

<h2>Start with one flow</h2>

<p>Successful implementations usually start with the single most common flow, such as pricing questions or demo requests. Once that flow is stable and the data reaches the CRM correctly, other flows are added one at a time.</p>

<p>Enklaris implements conversational AI agents from flow design through to integration with the systems you already use. <a href="/#contact">Talk to our team</a>.</p>`,
  },
  {
    slug: "why-indonesian-businesses-need-the-whatsapp-business-api",
    title: "Why Indonesian Businesses Need the WhatsApp Business API",
    excerpt:
      "WhatsApp is where most Indonesian customers expect to reach a brand. The gap between the regular app and the WhatsApp Business API can decide how far your operation scales.",
    category: "WhatsApp API",
    date: "2026-04-15",
    readTime: 4,
    featured: false,
    content: `<p>WhatsApp is part of daily life for most people in Indonesia. When customers want to reach a brand, it is almost always the first channel they open.</p>

<h2>The WhatsApp Business app and the API are different things</h2>

<p>Many businesses already use the WhatsApp Business app, but it has real limits: one number tied to one device, no integration with internal systems, and no structured broadcasting. The WhatsApp Business API is a different kind of infrastructure.</p>

<ul>
  <li><strong>Multi-agent access</strong>: a customer service team can handle chats from one business number at the same time.</li>
  <li><strong>Automated messaging</strong>: integration with your CRM, ERP or internal systems, with messages triggered by events.</li>
  <li><strong>Verified business profile</strong>: an official account that customers can trust.</li>
  <li><strong>Structured broadcasts</strong>: approved template messages sent to opted-in contacts.</li>
  <li><strong>Analytics</strong>: delivery and engagement tracked in detail.</li>
</ul>

<h2>Why now</h2>

<p>Meta's pricing has become easier to understand, which makes costs more predictable at enterprise scale. Competitors in retail, banking and healthcare are already automating parts of their customer journey on WhatsApp.</p>

<p>Indonesia's Personal Data Protection Law also pushes businesses toward channels with end-to-end encryption and a clear audit trail, which the WhatsApp Business API provides through official Business Solution Providers.</p>

<h2>Use cases that pay back fastest</h2>

<ol>
  <li><strong>Order confirmation and tracking</strong>: automatic notifications take routine questions away from the call centre.</li>
  <li><strong>Re-engagement campaigns</strong>: personalised template messages reach customers where they already read their messages.</li>
  <li><strong>First-line customer support</strong>: an AI agent answers common questions around the clock.</li>
</ol>

<h2>What to prepare before you start</h2>

<p>Adopting the WhatsApp Business API is more than registering a new number. You need a content plan for the template messages Meta will review, backend infrastructure for the API integration, and a clear onboarding process for agents.</p>

<p>If you are weighing whether the WhatsApp Business API fits your operation, <a href="/#contact">talk to the Enklaris team</a>.</p>`,
  },
  {
    slug: "ai-agent-vs-chatbot-which-one-fits-your-business",
    title: "AI Agent vs Chatbot: Which One Fits Your Business?",
    excerpt:
      "Chatbot and AI agent are often used as if they mean the same thing, but they work very differently. Knowing the difference matters before you invest in automation.",
    category: "AI Agent",
    date: "2026-04-10",
    readTime: 5,
    featured: false,
    content: `<p>Conversations about business automation tend to end on two words: chatbot or AI agent. Vendors often use them interchangeably, which makes buying decisions confusing. This article sets out the essential difference.</p>

<h2>Chatbots follow rules and scripts</h2>

<p>A conventional chatbot runs on a decision tree written in advance. When a user types something, the system looks for a matching pattern and returns the prepared response. That works well for clearly defined scenarios such as FAQs, simple bookings or menu navigation.</p>

<p>The limits show when users step outside the expected path. A slightly different question can produce an irrelevant answer or a frustrating loop. Maintenance is heavy too: every change to a flow means updating the script by hand.</p>

<h2>AI agents work toward a goal</h2>

<p>An AI agent works in a different way. Instead of following a script, it:</p>

<ul>
  <li><strong>Understands intent</strong> in natural language, without pattern matching.</li>
  <li><strong>Takes multi-step actions</strong>: it can query a database, call an API, send an email or update the CRM.</li>
  <li><strong>Adapts to context</strong>: it remembers the conversation and adjusts its replies.</li>
  <li><strong>Works across channels</strong>: one agent can serve WhatsApp, web chat and email.</li>
</ul>

<p>In practice: a customer asks about an order, the agent checks the database, finds a delivery delay and offers compensation under the policy in force, with no person involved.</p>

<h2>How to decide</h2>

<p>The useful question is which one matches the complexity of what you need today.</p>

<p>Consider a <strong>chatbot</strong> if your use case is narrow, volume is moderate, and your team cannot maintain an AI model. Chatbots are faster to deploy and more predictable.</p>

<p>Consider an <strong>AI agent</strong> if you need to handle complex or unstructured scenarios, connect several systems, or serve very high volumes with high quality expectations.</p>

<h2>Many teams combine both</h2>

<p>A common pattern is a hybrid: a chatbot for well-defined first-line questions, and an AI agent for escalations and complex cases. It balances cost, speed of implementation and quality of experience.</p>

<p>Evaluating an automation strategy? <a href="/#contact">Discuss your needs with our team</a>.</p>`,
  },
  {
    slug: "how-to-choose-a-technology-integration-partner",
    title: "How to Choose a Technology Integration Partner",
    excerpt:
      "Choosing a technology partner is about more than price and portfolio. The decision shapes your infrastructure, your team and your ability to adapt for years.",
    category: "Industry Insights",
    date: "2026-03-22",
    readTime: 5,
    featured: false,
    content: `<p>Companies spend heavily on technology integration projects every year, and many of those projects miss their original timeline, budget or outcome. One of the biggest factors in how a project turns out is the choice of partner.</p>

<h2>1. Technical depth, not a long list</h2>

<p>Many vendors show a long list of technologies. What matters more is depth in the area you need. Ask how many engineers have real experience with the specific technology, and ask to meet the technical team that will do the work, not only the sales team.</p>

<p>A warning sign: a vendor that cannot answer specific technical questions, or always says "we can handle that" without detail.</p>

<h2>2. A track record at your scale and in your industry</h2>

<p>Implementing the WhatsApp Business API for an e-commerce company with millions of transactions is very different from doing it for a B2B company with a few hundred enterprise customers. Look for relevant case studies with detail on the problems faced and how they were solved.</p>

<h2>3. A transparent engagement model</h2>

<p>How does the vendor define scope? How are change requests handled? What happens when a bug appears after go-live? These questions need written answers before a contract is signed.</p>

<h2>4. Knowledge transfer</h2>

<p>Long-term dependence on a vendor is a business risk. A good partner makes sure your internal team understands what was built and can run it. Ask about documentation, training and the support model after implementation.</p>

<h2>5. Culture and communication</h2>

<p>Integration projects mean months of close collaboration. Whether a vendor is responsive, honest about obstacles and brings solutions will shape the working relationship and the result.</p>

<h2>Questions to ask during evaluation</h2>

<ul>
  <li>Tell us about a project that did not go to plan and how you handled it.</li>
  <li>How do you handle different interpretations of a requirement?</li>
  <li>Who will be our single point of contact?</li>
  <li>What is a typical timeline for a project of similar scope?</li>
</ul>

<p>At Enklaris we believe transparency is the basis of a good working relationship. If you are evaluating technology partners, <a href="/#contact">we are open to a conversation</a>, including about the things we cannot help with.</p>`,
  },
  {
    slug: "building-an-automated-customer-journey-with-whatsapp-and-ai-agents",
    title: "Building an Automated Customer Journey with WhatsApp and AI Agents",
    excerpt:
      "Together, the WhatsApp Business API and an AI agent can automate the customer journey from first contact to retention without giving up the quality of each interaction.",
    category: "WhatsApp API",
    date: "2026-03-18",
    readTime: 5,
    featured: false,
    content: `<p>A good customer journey is about the right touchpoint at the right time with a relevant message. This is where the WhatsApp Business API and an AI agent work well together: the experience feels personal while it runs automatically.</p>

<h2>The basic architecture</h2>

<ul>
  <li><strong>The WhatsApp Business API</strong> is the channel: it sends and receives messages, manages sessions and handles media.</li>
  <li><strong>The AI agent</strong> is the brain of the conversation: it understands intent, takes action and coordinates with backend systems.</li>
  <li><strong>An orchestration layer</strong> connects both to the CRM, databases and other systems.</li>
</ul>

<h2>Stage 1: acquisition and first contact</h2>

<p>When a prospect first writes on WhatsApp, from an ad, a QR code or a link, the AI agent greets them with a relevant welcome. It can pick up context straight away: where they came from, which product interests them, and what they need next. The agent holds a natural conversation and collects the relevant information along the way.</p>

<h2>Stage 2: qualification and nurturing</h2>

<p>For B2B or long sales cycles, the agent can run qualification: exploring the problem, understanding the timeline and judging readiness to buy. Based on the result, it routes the prospect to the sales team or into a nurturing sequence.</p>

<h2>Stage 3: conversion and onboarding</h2>

<p>When the customer is ready, the agent can arrange the next steps: scheduling a demo, sending documents, or processing an order for certain products. With a payment gateway connected, the transaction can happen inside the WhatsApp conversation.</p>

<h2>Stage 4: after the purchase</h2>

<p>This is where many businesses lose value. After the transaction, the agent can run an onboarding sequence, collect feedback, send reminders and spot early signs of churn. A well-integrated system notices when a customer has been inactive and sends a message that fits their context.</p>

<h2>What to prepare</h2>

<p>A successful implementation needs a detailed map of the customer journey, clean data integration and good conversation design. The technology exists; the quality of the planning decides the result.</p>

<p>To discuss how this architecture could work for your business, <a href="/#contact">get in touch</a>.</p>`,
  },
];

export const CATEGORIES = ["All", "Lead Generation", "AI Agent", "WhatsApp API", "Industry Insights"];
