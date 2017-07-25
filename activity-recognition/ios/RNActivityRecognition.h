#import <React/RCTEventEmitter.h>
#import <CoreMotion/CoreMotion.h>

@interface RNActivityRecognition : RCTEventEmitter <RCTBridgeModule>
@property (nonatomic, strong) CMMotionActivityManager *motionActivityManager;
@property (nonatomic, strong) NSTimer *timer;
@property (nonatomic) float timeout;
@end
  
