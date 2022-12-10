import React, {Dispatch, SetStateAction} from 'react';
import {StyleProp, View, ViewProps, ViewStyle} from 'react-native';

interface GetDimensionsProps {
  children: React.ReactNode | React.ReactNode[];
  onDimensions: Dispatch<SetStateAction<{height: number; width: number}>>;
  style?: StyleProp<ViewStyle> | undefined;
  viewProps?: ViewProps;
}

const ViewWithDimensions: React.FC<GetDimensionsProps> = ({
  children,
  onDimensions,
  style,
  ...viewProps
}: GetDimensionsProps) => {
  return (
    <View
      onLayout={event =>
        onDimensions({
          width: event.nativeEvent.layout.width,
          height: event.nativeEvent.layout.height,
        })
      }
      style={style}
      {...viewProps}>
      {children}
    </View>
  );
};

export default ViewWithDimensions;

// ────────────────────────────────────────────────────────────────────────────────
// usage

// const [dimensions, setDimensions] = useState<{
//   height: number;
//   width: number;
// }>({width: 0, height: 0});
//
// <GetDimensions onDimensions={setDimensions}>
//  {children}
// </GetDimensions>
