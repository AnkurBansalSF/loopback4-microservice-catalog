import {BindingKey, MetadataAccessor} from '@loopback/core';
import {FeatureFlagFn, FeatureFlagMetadata} from './types';

export const FEATURE_FLAG_METADATA_ACCESSOR = MetadataAccessor.create<
  FeatureFlagMetadata,
  MethodDecorator
>('sf.featureFlag.accessor.operationsMetadata');

export namespace StrategyBindings {
  export const FEATURE_FLAG_ACTION = BindingKey.create<FeatureFlagFn>(
    'sf.featureflag.actions.toggle',
  );

  export const METADATA = BindingKey.create<FeatureFlagMetadata | undefined>(
    'sf.featureFlag.operationsMetadata',
  );
}
