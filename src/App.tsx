import { NewDesignComponent } from './new-design/NewDesignComponent';
import { NewDesignContainer } from './new-design/NewDesignContainer';
import { OldDesignComponent } from './old-design/OldDesignComponent';

export const App = () => {
  return (
    <div className="flex flex-col gap-4 p-4">
      <OldDesignComponent />

      <NewDesignContainer>
        <NewDesignComponent />
      </NewDesignContainer>
    </div>
  );
};
