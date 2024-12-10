import { NewDesignComponent } from './new-design/NewDesignComponent';
import { OldDesignComponent } from './old-design/OldDesignComponent';

export const App = () => {
  return (
    <div className="flex flex-col gap-4">
      <OldDesignComponent />

      <div>
        <NewDesignComponent />
      </div>
    </div>
  );
};
