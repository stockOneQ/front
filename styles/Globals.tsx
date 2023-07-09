import Variables from './abstracts/Variables';
import Animation from './base/Animation';
import Base from './base/Base';
import Reset from './base/Reset';
import Typography from './base/Typography';
import Utilities from './base/Utilities';

/** Global styles */
const Globals = () => {
  return (
    <>
      <Variables />
      <Animation />
      <Base />
      <Reset />
      <Typography />
      <Utilities />
    </>
  );
};

export default Globals;