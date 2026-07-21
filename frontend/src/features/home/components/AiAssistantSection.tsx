import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/forms/input';
import { Bot, Sparkles } from 'lucide-react';

const suggestedPrompts = [
  'Find a tutor near me',
  "Summarize this week's deadlines",
  'Recommend study groups',
];

export const AiAssistantSection = () => {
  return (
    <section aria-labelledby="ai-assistant-title">
      <Card className="hover:shadow-md transition-shadow duration-fast">
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary shrink-0">
              <Bot className="w-5 h-5" aria-hidden="true" />
            </div>
            <div>
              <CardTitle id="ai-assistant-title">AI Assistant</CardTitle>
              <CardDescription>Your intelligent campus companion</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <Input
            leftIcon={<Bot className="w-4 h-4" />}
            placeholder="Ask me anything about campus life..."
            inputSize="lg"
            disabled
          />
          <div className="flex flex-wrap gap-2">
            {suggestedPrompts.map((prompt) => (
              <Button
                key={prompt}
                variant="secondary"
                size="sm"
                disabled
                leftIcon={<Sparkles className="w-3 h-3" />}
              >
                {prompt}
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  );
};
