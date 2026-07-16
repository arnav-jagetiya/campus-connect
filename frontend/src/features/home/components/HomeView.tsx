import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '@/components/ui/card';
import { Input } from '@/components/forms/input';
import { Search, Mail, ArrowRight, Save } from 'lucide-react';

export const HomeView = () => {
  const [loadingDemo, setLoadingDemo] = useState(false);

  return (
    <div className="space-y-12 pb-12">
      {/* Introduction Card */}
      <Card>
        <CardHeader>
          <CardTitle>Core Component Library Foundation</CardTitle>
          <CardDescription>
            Visual verification preview for Button, Input, and Card primitives styling in light and
            dark modes.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-body text-text-secondary">
            These primitives are styled purely using semantic design system tokens. Toggle light and
            dark themes in the header to verify theme adaptation.
          </p>
        </CardContent>
      </Card>

      {/* Button Showcase */}
      <section className="space-y-6">
        <h2 className="text-h2 font-bold text-text tracking-tight border-b border-border pb-2">
          1. Button Primitive
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Variants */}
          <Card>
            <CardHeader>
              <CardTitle>Visual Variants</CardTitle>
              <CardDescription>Primary, Secondary, Outline, Ghost, Destructive</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-3">
              <Button variant="primary">Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="destructive">Destructive</Button>
            </CardContent>
          </Card>

          {/* Sizes */}
          <Card>
            <CardHeader>
              <CardTitle>Sizes & Layout</CardTitle>
              <CardDescription>Small, Medium, Large, and Full Width</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-wrap items-center gap-3">
                <Button size="sm">Small (sm)</Button>
                <Button size="md">Medium (md)</Button>
                <Button size="lg">Large (lg)</Button>
              </div>
              <Button fullWidth variant="outline">
                Full Width Button
              </Button>
            </CardContent>
          </Card>

          {/* States */}
          <Card>
            <CardHeader>
              <CardTitle>Tactile States</CardTitle>
              <CardDescription>Hover, Active, Loading, and Disabled behaviors</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-3">
              <Button disabled>Disabled</Button>
              <Button isLoading variant="primary">
                Loading State
              </Button>
              <Button
                variant="secondary"
                isLoading={loadingDemo}
                onClick={() => {
                  setLoadingDemo(true);
                  setTimeout(() => setLoadingDemo(false), 2000);
                }}
              >
                Click to Load (2s)
              </Button>
            </CardContent>
          </Card>

          {/* Icon Support */}
          <Card>
            <CardHeader>
              <CardTitle>Icon Integration</CardTitle>
              <CardDescription>Supports leading and trailing icon decorators</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-3">
              <Button leftIcon={<Save className="w-4 h-4" />}>Save Progress</Button>
              <Button variant="outline" rightIcon={<ArrowRight className="w-4 h-4" />}>
                Continue
              </Button>
              <Button
                variant="ghost"
                size="sm"
                aria-label="Mail settings"
                leftIcon={<Mail className="w-4 h-4" />}
              />
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Input Showcase */}
      <section className="space-y-6">
        <h2 className="text-h2 font-bold text-text tracking-tight border-b border-border pb-2">
          2. Input Primitive
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Sizes */}
          <Card>
            <CardHeader>
              <CardTitle>Input Sizing</CardTitle>
              <CardDescription>Small, Medium, and Large configurations</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-1">
                <label className="text-caption font-medium text-text-secondary">Small Input</label>
                <Input inputSize="sm" placeholder="Enter username..." />
              </div>
              <div className="space-y-1">
                <label className="text-caption font-medium text-text-secondary">Medium Input</label>
                <Input inputSize="md" placeholder="Enter username..." />
              </div>
              <div className="space-y-1">
                <label className="text-caption font-medium text-text-secondary">Large Input</label>
                <Input inputSize="lg" placeholder="Enter username..." />
              </div>
            </CardContent>
          </Card>

          {/* States and Decorators */}
          <Card>
            <CardHeader>
              <CardTitle>Input States & Decorators</CardTitle>
              <CardDescription>Icons, Disabled, and Validation states</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-1">
                <label className="text-caption font-medium text-text-secondary">Left Icon</label>
                <Input leftIcon={<Search className="w-4 h-4" />} placeholder="Search items..." />
              </div>
              <div className="space-y-1">
                <label className="text-caption font-medium text-text-secondary">Right Icon</label>
                <Input rightIcon={<Mail className="w-4 h-4" />} placeholder="email@domain.com" />
              </div>
              <div className="space-y-1">
                <label className="text-caption font-medium text-text-secondary">
                  Disabled State
                </label>
                <Input disabled placeholder="Input is disabled" />
              </div>
              <div className="space-y-1">
                <label className="text-caption font-medium text-text-danger">Invalid Input</label>
                <Input aria-invalid="true" placeholder="Invalid input value" />
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Card Showcase */}
      <section className="space-y-6">
        <h2 className="text-h2 font-bold text-text tracking-tight border-b border-border pb-2">
          3. Card Layout Primitives
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Default */}
          <Card variant="default">
            <CardHeader>
              <CardTitle>Default Variant</CardTitle>
              <CardDescription>With border and subtle shadow</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-body text-text-secondary">
                This card uses the default visual variant styling, optimal for standard layout boxes
                and dashboards.
              </p>
            </CardContent>
            <CardFooter className="justify-end">
              <Button size="sm" variant="outline">
                Details
              </Button>
            </CardFooter>
          </Card>

          {/* Outlined */}
          <Card variant="outlined">
            <CardHeader>
              <CardTitle>Outlined Variant</CardTitle>
              <CardDescription>No shadow, borders only</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-body text-text-secondary">
                This card uses the outlined variant styling, optimal for minimal separation without
                vertical elevation shadow weight.
              </p>
            </CardContent>
            <CardFooter className="justify-end">
              <Button size="sm" variant="outline">
                Details
              </Button>
            </CardFooter>
          </Card>

          {/* Elevated */}
          <Card variant="elevated">
            <CardHeader>
              <CardTitle>Elevated Variant</CardTitle>
              <CardDescription>Broad shadow, no border lines</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-body text-text-secondary">
                This card uses the elevated variant styling, optimal for modals, overlays, or
                floating panels.
              </p>
            </CardContent>
            <CardFooter className="justify-end">
              <Button size="sm" variant="outline">
                Details
              </Button>
            </CardFooter>
          </Card>
        </div>
      </section>
    </div>
  );
};
