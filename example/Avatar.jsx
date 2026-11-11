import { Avatar, Icon } from "tavix";

export default function AvatarComponent() {
  return (
    <section className="flex flex-col gap-4">
      <div>
        <h1 className="h1 text-2xl font-bold mb-2">Avatar Component</h1>
        <p className="text-sm text-muted-foreground">
          Display user profiles with various sizes and statuses
        </p>
      </div>

      {/* Sizes with Image */}
      <div className="space-y-4">
        <h2 className="h2 text-lg font-semibold">Sizes with Image</h2>
        <div className="flex items-center gap-6">
          <div className="flex flex-col items-center gap-2">
            <Avatar size="xs" status="online">
              <img src="/tavix/images/user-avatar.jpg" alt="John Doe" />
            </Avatar>
            <span className="text-xs text-muted-foreground">xs</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Avatar size="sm" status="online">
              <img src="/tavix/images/user-avatar.jpg" alt="John Doe" />
            </Avatar>
            <span className="text-xs text-muted-foreground">sm</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Avatar size="md" status="online">
              <img src="/tavix/images/user-avatar.jpg" alt="John Doe" />
            </Avatar>
            <span className="text-xs text-muted-foreground">md</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Avatar size="lg" status="online">
              <img src="/tavix/images/user-avatar.jpg" alt="John Doe" />
            </Avatar>
            <span className="text-xs text-muted-foreground">lg</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Avatar size="xl" status="online">
              <img src="/tavix/images/user-avatar.jpg" alt="John Doe" />
            </Avatar>
            <span className="text-xs text-muted-foreground">xl</span>
          </div>
        </div>
      </div>

      {/* Status Indicators */}
      <div className="space-y-4">
        <h2 className="h2 text-lg font-semibold">Status Indicators</h2>
        <div className="flex items-center gap-8">
          <div className="flex flex-col items-center gap-2">
            <Avatar size="lg" status="online">
              JD
            </Avatar>
            <span className="text-xs text-muted-foreground">Online</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Avatar size="lg" status="busy">
              JD
            </Avatar>
            <span className="text-xs text-muted-foreground">Busy</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Avatar size="lg" status="offline">
              JD
            </Avatar>
            <span className="text-xs text-muted-foreground">Offline</span>
          </div>
        </div>
      </div>

      {/* Text and Icon Variants */}
      <div className="space-y-4">
        <h2 className="h2 text-lg font-semibold">Text & Icon Variants</h2>
        <div className="flex items-center gap-8">
          <div className="flex flex-col items-center gap-2">
            <Avatar size="lg">JD</Avatar>
            <span className="text-xs text-muted-foreground">Initials</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Avatar size="lg">
              <Icon name="menu" />
            </Avatar>
            <span className="text-xs text-muted-foreground">Icon</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Avatar size="lg" />
            <span className="text-xs text-muted-foreground">Named</span>
          </div>
        </div>
      </div>

      {/* Group Example */}
      <div className="space-y-4">
        <h2 className="h2 text-lg font-semibold">Avatar Group</h2>
        <div className="flex -space-x-2">
          <Avatar size="lg" status="online">
            <img src="/tavix/images/user-avatar.jpg" alt="User 1" />
          </Avatar>
          <Avatar size="lg" status="online">
            JD
          </Avatar>
          <Avatar size="lg" status="busy">
            SA
          </Avatar>
          <Avatar size="lg" status="offline">
            MK
          </Avatar>
        </div>
      </div>
    </section>
  );
}
